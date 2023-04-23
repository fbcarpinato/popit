import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma, User } from '../../generated';
import bcrypt from 'bcrypt';
import { jwtConstants } from '../auth/constants';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async countAll(): Promise<number> {
    return this.prisma.user.count();
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(data: Prisma.UserWhereUniqueInput): Promise<User | undefined> {
    return this.prisma.user.findUnique({
      where: data,
    });
  }
  v;

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.password, jwtConstants.SALT);

    return this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }
}
