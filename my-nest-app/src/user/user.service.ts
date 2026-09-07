import { Injectable } from '@nestjs/common';
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
   getUser(){
    return this.userRepository.find()
 }
 getUserbyid(id :number){

  return this.userRepository.findOneBy({
    id: id,
  });
}
createUser(data: CreateUserDto) {
  const user = this.userRepository.create(data);

  return this.userRepository.save(user);
}
Updateuser(id:number,data:UpdateUserDto){
    return this.userRepository.update(id,data)
}
updateUser(id: number, data: UpdateUserDto) {
  return this.userRepository.update(id, data);
}
Update(id: number, data: UpdateUserDto) {
  return this.userRepository.update(id, data);
}
deleteUser(id: number) {
  return this.userRepository.delete(id);
}
 }
