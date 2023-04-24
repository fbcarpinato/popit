import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ChallengesModule } from './challenges/challenges.module';

@Module({
  imports: [AuthModule, UsersModule, ChallengesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
