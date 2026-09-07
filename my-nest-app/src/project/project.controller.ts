import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { ProjectService } from './project.service';
import { CreateProjectDto } from './sto/createproject';
import { UpdateProjectDto } from './sto/updateproject';


@Controller('project')
export class ProjectController {

  constructor(
    private readonly projectService: ProjectService,
  ) {}

  // GET all
  @Get()
  getProjects() {
    return this.projectService.getProjects();
  }

  // GET one
  @Get(':id')
  getProjectById(@Param('id') id: number) {
    return this.projectService.getProjectById(id);
  }

  // CREATE
  @Post()
  createProject(@Body() data: CreateProjectDto) {
    return this.projectService.createProject(data);
  }

  // UPDATE
  @Put(':id')
  updateProject(
    @Param('id') id: number,
    @Body() data: UpdateProjectDto,
  ) {
    return this.projectService.updateProject(id, data);
  }

  // DELETE
  @Delete(':id')
  deleteProject(@Param('id') id: number) {
    return this.projectService.deleteProject(id);
  }
}