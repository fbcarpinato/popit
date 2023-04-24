import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { GetChallengesDto } from './validations/getChallenges.dto';
import { ChallengesService } from './challenges.service';
import { challengeTransformer } from './transformers/challenge.transformer';

@Controller('challenges')
export class ChallengesController {
  constructor(private challengesService: ChallengesService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getUsers(@Query() GetChallengesDto: GetChallengesDto) {
    const users = await this.challengesService.findMany({
      take: +GetChallengesDto.take,
      skip: +GetChallengesDto.skip,
    });

    const totalCount = await this.challengesService.countAll();

    return {
      data: users.map(challengeTransformer),
      totalCount,
    };
  }
}
