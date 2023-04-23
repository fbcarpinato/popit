import { User } from '../../../generated';

export function userTransformer(user: User) {
  return {
    id: user.id,
    email: user.email,
    username: user.username,
  };
}
