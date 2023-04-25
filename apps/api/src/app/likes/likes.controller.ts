import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CreateLikeDto } from './validations/createLike.dto';
import { LikesService } from './likes.service';

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
}
