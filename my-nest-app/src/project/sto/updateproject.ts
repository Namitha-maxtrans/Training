import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateProjectDto {

  @IsOptional()
  @IsInt()
  user_id?: number;

  @IsOptional()
  @IsString()
  @MaxLength(150)
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}