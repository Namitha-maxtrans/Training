import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // GET ALL USERS
  getUsers() {
    return this.userRepository.find();
  }

  // GET ONE USER
  async getUserById(id: number) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  // CREATE USER
  createUser(data: CreateUserDto) {
    const user = this.userRepository.create(data);

    return this.userRepository.save(user);
  }

  // UPDATE USER
  async updateUser(id: number, data: UpdateUserDto) {
    const result = await this.userRepository.update(id, data);

    if (result.affected === 0) {
      throw new NotFoundException('User not found');
    }

    return {
      message: 'User updated successfully',
    };
  }

  // DELETE USER
  async deleteUser(id: number) {
    const result = await this.userRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('User not found');
    }

    return {
      message: 'User deleted successfully',
    };
  }
}