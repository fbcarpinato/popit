import { Injectable } from '@nestjs/common';
import { Like, Prisma } from '../../generated';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class LikesService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    likeWhereUniqueInput: Prisma.LikeWhereUniqueInput
  ): Promise<Like | null> {
    return this.prisma.like.findUnique({
      where: likeWhereUniqueInput,
    });
  }

  async create(data: Prisma.LikeCreateInput): Promise<Like> {
    return this.prisma.like.create({
      data,
    });
  }
}
