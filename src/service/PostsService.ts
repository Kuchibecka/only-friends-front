import {$api} from 'boot/axios';
import {PostModel} from 'components/models';
import {PostData} from "src/model/PostData";

export interface PostResponse {
  res: string //todo: edit structure
}

export const PostsService = {
  async getFeedPosts() {
    try {
      //todo: ??? base url is wrong
      const { data } = await $api.get<PostModel[]>('/me/subscriptions/posts?page=0&page_size=20');
      return data;
    } catch (e: unknown) {
      return {error: e};
    }
  },

  async getUserPosts(user_id: string) {
    try {
      // const { data } = await $api.get<PostModel[]>('/users/' + user_id + '/posts?page=0&page_size=20');
      const { data } = await $api.get<PostModel[]>('/users/' + user_id + '/posts?page=0&page_size=20');
      return data;
    } catch (e: unknown) {
      return { error: e };
    }
  },

  async newPost(postData: PostData) {
    try {
      const { data } = await $api.post<PostModel>('/newPost', postData); //todo: edit url
      return data;
    } catch (e: unknown) {
      return {error: e};
    }
  }
}
