import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from './task.entity';
import { CreateTaskDto } from './create-task.dto';
import { UpdateTaskDto } from './Updatetask.dto';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  // GET all tasks
  getTasks() {
    return this.taskRepository.find({
      relations: {
        project: true,
      },
    });
  }

  // GET task by ID
  async getTaskById(id: number) {

    const task = await this.taskRepository.findOne({
      where: { id },
      relations: {
        project: true,
      },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  // POST create task
  async createTask(data: CreateTaskDto) {

    const task = this.taskRepository.create(data);

    return this.taskRepository.save(task);
  }

  // PUT update task
  async updateTask(id: number, data: UpdateTaskDto) {

    const task = await this.taskRepository.preload({
      id,
      ...data,
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return this.taskRepository.save(task);
  }

  // DELETE task
  async deleteTask(id: number) {

    const result = await this.taskRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Task not found');
    }

    return {
      message: 'Task deleted successfully',
    };
  }
}