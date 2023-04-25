import { IsNotEmpty, IsNumber } from 'class-validator';

export class DeleteLikeDto {
  @IsNotEmpty()
  @IsNumber()
  contentId: number;
}
