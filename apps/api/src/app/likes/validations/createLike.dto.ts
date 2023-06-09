import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateLikeDto {
  @IsNotEmpty()
  @IsNumber()
  contentId: number;
}
