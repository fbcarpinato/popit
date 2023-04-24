import { IsNotEmpty, IsNumberString } from 'class-validator';

export class GetContentsDto {
  @IsNotEmpty()
  @IsNumberString()
  take: string;

  @IsNotEmpty()
  @IsNumberString()
  skip: string;
}
