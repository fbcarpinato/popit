import { ArrayMinSize, IsNotEmpty, IsString } from 'class-validator';

export class CreateChallengeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @ArrayMinSize(1)
  @IsString({ each: true })
  tags: string;
}
