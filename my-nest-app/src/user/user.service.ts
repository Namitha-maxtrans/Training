import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity'; 
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // GET ALL USERS
  async getUsers() {
  const users = await this.userRepository.find();

  return users.map(({ password, ...user }) => user);
}
  // getUsers() {
  //   return this.userRepository.find({
  //     order: {
  //     id: 'ASC',
  //   },
  //   });
  // }

  // GET ONE USER
  async getUserById(id: number) {
    const user = await this.userRepository.findOneBy({ id ,});

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  // CREATE USER
 async createUser(data: CreateUserDto) {
   const hashedPassword= await bcrypt.hash(data.password,10);
   const user= this.userRepository.create({...data,password:hashedPassword});
   return this.userRepository.save(user)
  }

  // UPDATE USER
  async updateUser(id: number, data: UpdateUserDto) {
    
  const updateData = { ...data };

  // Hash password only when a new password is provided
  if (updateData.password) {
    updateData.password = await bcrypt.hash(
      updateData.password,
      10,
    );
  }

  const result = await this.userRepository.update(
    id,
    updateData,
  );

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