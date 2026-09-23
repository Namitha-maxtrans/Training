import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
;

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  // GET ALL USERS
  @Get()
  @HttpCode(200)
  @UseGuards(AuthGuard('jwt'))
 

// getUsers(@Req() req:any) {
//   return this.userService.getUserById(
//     req.user.userId,
//   );
// }

  getUsers() {
    return this.userService.getUsers();
  }

  // GET ONE USER
  @Get(':id')
  @HttpCode(200)
  getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  // CREATE USER
  @Post()
  @HttpCode(201)
  createUser(@Body() data: CreateUserDto) {
    return this.userService.createUser(data);
  }

  // UPDATE USER
  @Put(':id')
  @HttpCode(200)
  updateUser(
    @Param('id') id: number,
    @Body() data: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, data);
  }

  // DELETE USER
  @Delete(':id')
  @HttpCode(200)
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}