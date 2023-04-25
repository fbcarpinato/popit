import { IsNotEmpty, IsNumberString } from 'class-validator';

export class DeleteLikeDto {
  @IsNotEmpty()
  @IsNumberString()
  contentId: number;
}
