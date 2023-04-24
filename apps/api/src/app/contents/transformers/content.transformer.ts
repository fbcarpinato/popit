import { Content } from '../../../generated';

export function contentTransformer(content: Content) {
  return {
    id: content.id,
    imageUrl: content.imageUrl,
  };
}
