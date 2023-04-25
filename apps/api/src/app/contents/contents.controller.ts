import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { GetContentsDto } from './validations/getContents.dto';
import { Like } from '../../generated';

@Controller('contents')
export class ContentsController {
  constructor(private contentsService: ContentsService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getContents(@Req() request, @Query() getContentsDto: GetContentsDto) {
    const contents = await this.contentsService.findMany({
      take: +getContentsDto.take,
      skip: +getContentsDto.skip,
    });

    const totalCount = await this.contentsService.countAll();

    return {
      data: contents.map((content: any) => ({
        id: content.id,
        imageUrl: content.imageUrl,
        likes: content._count.likes,
        liked: !!content.likes.find(
          (like: Like) => like.userId === request.user.userId
        ),
        user: {
          id: content.user.id,
          username: content.user.username,
          email: content.user.email,
        },
        challenge: {
          id: content.challenge.id,
          name: content.challenge.name,
        },
      })),
      totalCount,
    };
  }
}
