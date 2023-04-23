import { Controller, Get, UseGuards, Request, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UsersService } from './users.service';
import { GetUsersDto } from './validations/getUsers.dto';
import { userTransformer } from './transformers/user.transformer';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  async getProfile(@Request() request) {
    const user = await this.usersService.findOne({ email: request.user.email });

    return userTransformer(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getUsers(@Query() getUsersDto: GetUsersDto) {
    const users = await this.usersService.findMany({
      take: +getUsersDto.take,
      skip: +getUsersDto.skip,
    });

    const totalCount = await this.usersService.countAll();

    return {
      data: users.map(userTransformer),
      totalCount,
    };
  }
}
