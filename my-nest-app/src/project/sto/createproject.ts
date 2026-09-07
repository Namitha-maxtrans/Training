import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateProjectDto {

  @IsInt()
  user_id: number;

  @IsString()
  @MaxLength(150)
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}