import {defineStore} from 'pinia';
import {SimpleState} from 'src/global/types/State';
import {ref} from 'vue';
import {PostModel} from 'components/models';
import {PostsService} from 'src/service/PostsService';

export const usePostsStore = defineStore('postsStore', () => {
  const getPostsState = ref<SimpleState>('unset');

  const postList = ref<PostModel[]>();

  const getFeedPosts = async () => {
    getPostsState.value = 'loading';
    const res = await PostsService.getFeedPosts();
    if ('error' in res) {
      getPostsState.value = 'error';
      localStorage.setItem('post_feed', "error")
    } else {
      getPostsState.value = 'success';

      localStorage.setItem('post_feed', JSON.stringify(res));
      // postList.value = res;
    }

    return res;
  }

  const getUserPosts = async (user_id: string) => {
    const res = await PostsService.getUserPosts(user_id);
    if ('error' in res) {
      localStorage.setItem('posts', "error")
    } else {
      getPostsState.value = 'success';

      // postList.value = res;
      localStorage.setItem('posts', JSON.stringify(res));
    }
    return res;
  };

  const newPost = async (postData) => {
    getPostsState.value = 'loading';
    const res = await PostsService.newPost(postData);
    if ('error' in res) {
      getPostsState.value = 'error';
    } else {
      getPostsState.value = 'success';

      //todo: ???
      // postList.value?.push(new PostModel())
    }
  }

  //todo: param === id?
  const deletePost = async (postData) => {
    getPostsState.value = 'loading';
    const res = await PostsService.deletePost(postData);
    if ('error' in res) {
      getPostsState.value = 'error';
    } else {
      getPostsState.value = 'success';

      //todo: ???
      const index = postList.value?.indexOf(postData)
      if (index > -1) {
        postList.value?.slice(index, 1);
      }
    }
  }

  return {
    getPostsState,
    getFeedPosts,
    newPost,
    getUserPosts
  };
});
