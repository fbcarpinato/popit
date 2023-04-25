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
  async getContents(@Query() getContentsDto: GetContentsDto) {
    const contents = await this.contentsService.findMany({
      take: +getContentsDto.take,
      skip: +getContentsDto.skip,
    });
    console.log(contents);

    const totalCount = await this.contentsService.countAll();

    return {
      data: contents.map(contentTransformer),
      totalCount,
    };
  }
}
