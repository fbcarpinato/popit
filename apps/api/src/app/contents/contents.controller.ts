import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { GetContentsDto } from './validations/getContents.dto';
import { contentTransformer } from './transformers/content.transformer';

@Controller('contents')
export class ContentsController {
  constructor(private contentsService: ContentsService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getUsers(@Query() getContentsDto: GetContentsDto) {
    const users = await this.contentsService.findMany({
      take: +getContentsDto.take,
      skip: +getContentsDto.skip,
    });

    const totalCount = await this.contentsService.countAll();

    return {
      data: users.map(contentTransformer),
      totalCount,
    };
  }
}
