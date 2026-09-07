import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Project } from '../project/project.entity';

@Entity('tasks')
export class Task {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  project_id: number;

  @Column({ length: 200 })
  title: string;

  @Column({ length: 20, default: 'pending' })
  status: string;

  @Column({ type: 'date', nullable: true })
  due_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Project, (project) => project.tasks)
  @JoinColumn({ name: 'project_id' })
  project: Project;
}