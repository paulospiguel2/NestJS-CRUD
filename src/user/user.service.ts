import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { PrismaClient, User } from '.prisma/client';
import { CreateUniqueID } from './services/CreateUniqueID.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaClient) {}

  async create(createUserDto: CreateUserDTO): Promise<User> {
    const createUniqueID = new CreateUniqueID();
    const { uuid } = createUniqueID.execute();

    const user = await this.prisma.user.create({
      data: {
        id: uuid,
        ...createUserDto,
      },
    });

    return user;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
