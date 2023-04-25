import { ArrayMinSize, IsNotEmpty, IsString } from 'class-validator';

export class UpdateChallengeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @ArrayMinSize(1)
  @IsString({ each: true })
  tags: string;
}
