import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Challenge, Prisma } from '../../generated';

@Injectable()
export class ChallengesService {
  constructor(private prisma: PrismaService) {}

  async countAll(): Promise<number> {
    return this.prisma.challenge.count();
  }

  async findOne(
    challengeWhereUniqueInput: Prisma.ChallengeWhereUniqueInput
  ): Promise<Challenge | null> {
    return this.prisma.challenge.findUnique({
      where: challengeWhereUniqueInput,
    });
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

  async create(data: Prisma.ChallengeCreateInput): Promise<Challenge> {
    return this.prisma.challenge.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.ChallengeWhereUniqueInput;
    data: Prisma.ChallengeUpdateInput;
  }): Promise<Challenge> {
    const { where, data } = params;
    return this.prisma.challenge.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.ChallengeWhereUniqueInput): Promise<Challenge> {
    return this.prisma.challenge.delete({
      where,
      include: {
        contents: true,
      },
    });
  }
}
