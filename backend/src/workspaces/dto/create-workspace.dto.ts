import {
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateWorkspaceDto {
  @IsString()
  @Length(3, 100)
  name!: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;
}