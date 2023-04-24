import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ChallengesModule } from './challenges/challenges.module';
import { ContentsModule } from './contents/contents.module';

@Module({
  imports: [AuthModule, UsersModule, ChallengesModule, ContentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
