import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { GetChallengesDto } from './validations/getChallenges.dto';
import { ChallengesService } from './challenges.service';
import { challengeTransformer } from './transformers/challenge.transformer';
import { CreateChallengeDto } from './validations/createChallenge.dto';
import { UpdateChallengeDto } from './validations/updateChallenge.dto';

@Controller('challenges')
export class ChallengesController {
  constructor(private challengesService: ChallengesService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getChallenges(@Query() GetChallengesDto: GetChallengesDto) {
    const challenges = await this.challengesService.findMany({
      take: +GetChallengesDto.take,
      skip: +GetChallengesDto.skip,
    });

    const totalCount = await this.challengesService.countAll();

    return {
      data: challenges.map(challengeTransformer),
      totalCount,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async createChallenge(@Body() createChallengeDto: CreateChallengeDto) {
    const challenge = await this.challengesService.create({
      name: createChallengeDto.name,
      tags: createChallengeDto.tags,
    });

    return challenge;
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  async updateChallenge(
    @Param('id') id,
    @Body() updateChallengeDto: UpdateChallengeDto
  ) {
    const challenge = await this.challengesService.update({
      data: {
        name: updateChallengeDto.name,
        tags: updateChallengeDto.tags,
      },
      where: {
        id: +id,
      },
    });

    return challenge;
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deleteChallenge(@Param('id') id) {
    await this.challengesService.delete({
      id: +id,
    });

    return {};
  }
}
