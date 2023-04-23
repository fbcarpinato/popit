import { IsNotEmpty, IsNumberString } from 'class-validator';

export class GetUsersDto {
  @IsNotEmpty()
  @IsNumberString()
  take: string;

  @IsNotEmpty()
  @IsNumberString()
  skip: string;
}
