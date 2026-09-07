import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Project } from './project.entity';


import { UpdateProjectDto } from './sto/updateproject';
import { CreateProjectDto } from './sto/createproject';

@Injectable()
export class ProjectService {

  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  // GET all projects
  getProjects() {
    return this.projectRepository.find({
      relations: { user: true },
    });
  }

  // GET project by ID
  async getProjectById(id: number) {

    const project = await this.projectRepository.findOne({
      where: { id },
      relations: { user: true },
    });

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    return project;
  }

  // POST create project
  async createProject(data: CreateProjectDto) {

    const project = this.projectRepository.create(data);

    return this.projectRepository.save(project);
  }

  // PUT update project
  async updateProject(id: number, data: UpdateProjectDto) {

    const project = await this.projectRepository.preload({
      id,
      ...data,
    });

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    return this.projectRepository.save(project);
  }

  // DELETE project
  async deleteProject(id: number) {

    const result = await this.projectRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Project not found');
    }

    return {
      message: 'Project deleted successfully',
    };
  }
}