import { Content } from '../../../generated';

export function contentTransformer(
  content: Content & { _count: { likes: number } }
) {
  return {
    id: content.id,
    imageUrl: content.imageUrl,
    likes: content._count.likes,
  };
}
