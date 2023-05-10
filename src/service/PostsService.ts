import {$api} from 'boot/axios';
import {PostModel} from 'components/models';

export const PostsService = {
  async getPosts() {
    try {
      const { data } = await $api.get<PostModel[]>('/posts'); //todo: edit url
      return data;
    } catch (e: unknown) {
      return {error: e};
    }
  }
}
