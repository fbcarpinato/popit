import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { User } from '../../generated';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async findOne(email: string): Promise<User | undefined> {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }
}
