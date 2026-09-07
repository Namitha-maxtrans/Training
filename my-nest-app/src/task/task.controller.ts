import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { TaskService } from './task.service';
import { CreateTaskDto } from './create-task.dto';
import { UpdateTaskDto } from './Updatetask.dto';

@Controller('task')
export class TaskController {

  constructor(
    private readonly taskService: TaskService,
  ) {}

  // GET all
  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }

  // GET one
  @Get(':id')
  getTaskById(@Param('id') id: number) {
    return this.taskService.getTaskById(id);
  }

  // CREATE
  @Post()
  createTask(@Body() data: CreateTaskDto) {
    return this.taskService.createTask(data);
  }

  // UPDATE
  @Put(':id')
  updateTask(
    @Param('id') id: number,
    @Body() data: UpdateTaskDto,
  ) {
    return this.taskService.updateTask(id, data);
  }

  // DELETE
  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.taskService.deleteTask(id);
  }
}