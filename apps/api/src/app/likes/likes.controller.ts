import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CreateLikeDto } from './validations/createLike.dto';
import { LikesService } from './likes.service';
import { DeleteLikeDto } from './validations/deleteLike.dto';

@Controller('likes')
export class LikesController {
  constructor(private likesService: LikesService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async createLike(@Req() request, @Body() createLikeDto: CreateLikeDto) {
    await this.likesService.create({
      content: {
        connect: {
          id: createLikeDto.contentId,
        },
      },
      user: {
        connect: {
          id: request.user.userId,
        },
      },
    });

    return {};
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/')
  async deleteLike(@Req() request, @Query() deleteLikeDto: DeleteLikeDto) {
    await this.likesService.delete({
      userId_contentId: {
        contentId: +deleteLikeDto.contentId,
        userId: +request.user.userId,
      },
    });

    return {};
  }
}
