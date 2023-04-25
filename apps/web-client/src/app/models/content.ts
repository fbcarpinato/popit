import { Challenge } from './challenge';
import { User } from './user';

export interface Content {
  id: number;
  imageUrl: string;
  likes: number;
  liked: boolean;
  user: User;
  challenge: Challenge;
}
