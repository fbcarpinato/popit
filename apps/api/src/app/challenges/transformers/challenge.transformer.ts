import { Challenge } from '../../../generated';

export function challengeTransformer(challenge: Challenge) {
  return {
    id: challenge.id,
    name: challenge.name,
    tags: challenge.tags,
  };
}
