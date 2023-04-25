import { Content, Like } from '../../../generated';

export function contentTransformer(
  content: Content & { likes: Like[]; _count: { likes: number } },
  userId: number
) {
  return {
    id: content.id,
    imageUrl: content.imageUrl,
    likes: content._count.likes,
    liked: !!content.likes.find((like) => like.userId === userId),
  };
}
