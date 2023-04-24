import { IsNotEmpty, IsNumberString } from 'class-validator';

export class GetChallengesDto {
  @IsNotEmpty()
  @IsNumberString()
  take: string;

  @IsNotEmpty()
  @IsNumberString()
  skip: string;
}
