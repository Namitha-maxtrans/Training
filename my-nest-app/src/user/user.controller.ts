import { Body, Controller, Get,Param ,Patch,Post,Put,Delete} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';


@Controller('user')
export class UserController {
    constructor(
        private readonly userService:UserService
    ){}
    @Get()
    getUser(){
        return this.userService.getUser()
    }
    @Get(':id')
getUserById(@Param('id') id: number) {
  return this.userService.getUserbyid(id);
}
@Post()
createUser(@Body() data: CreateUserDto) {
  return this.userService.createUser(data);
}
@Patch(':id')
updateuser(@Param('id') id:number,@Body() data:UpdateUserDto){
 return this.userService.Updateuser(id,data)
}
@Put(':id')
updateUser(
  @Param('id') id: number,
  @Body() data: UpdateUserDto,
) {
  return this.userService.Update(id, data);
}
@Delete(':id')
deleteUser(@Param('id') id: number) {
  return this.userService.deleteUser(id);
}
}
