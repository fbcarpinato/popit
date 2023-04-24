import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Challenge, Prisma } from '../../generated';

@Injectable()
export class ChallengesService {
  constructor(private prisma: PrismaService) {}

  async countAll(): Promise<number> {
    return this.prisma.challenge.count();
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<Challenge[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.challenge.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
