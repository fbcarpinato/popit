import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Content, Prisma } from '../../generated';

@Injectable()
export class ContentsService {
  constructor(private prisma: PrismaService) {}

  async countAll(): Promise<number> {
    return this.prisma.content.count();
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<Content[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.content.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        _count: {
          select: {
            likes: true,
          },
        },
      },
    });
  }
}
