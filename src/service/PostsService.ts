import {$api} from 'boot/axios';
import {PostModel} from 'components/models';
import {PostData} from "src/model/PostData";

export interface PostResponse {
  res: string //todo: edit structure
}

export const PostsService = {
  async getPosts() {
    try {
      //todo: ??? base url is wrong
      const { data } = await $api.get<PostModel[]>('/posts'); //todo: edit url
      return data;
    } catch (e: unknown) {
      return {error: e};
    }
  },

  async newPost(postData: PostData) {
    try {
      const { data } = await $api.post<PostResponse>('/newPost', postData); //todo: edit url
      return data;
    } catch (e: unknown) {
      return {error: e};
    }
  }
}
