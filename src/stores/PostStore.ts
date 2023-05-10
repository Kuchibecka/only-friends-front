import {defineStore} from 'pinia';
import {SimpleState} from 'src/global/types/State';
import {ref} from 'vue';
import {PostModel} from 'components/models';
import {PostsService} from 'src/service/PostsService';

export const usePostsStore = defineStore('postsStore', () => {
  const getPostsState = ref<SimpleState>('unset');

  const postList = ref<PostModel[]>();

  const getPosts = async () => {
    getPostsState.value = 'loading';
    const res = await PostsService.getPosts();
    if ('error' in res) {
      getPostsState.value = 'error';
    } else {
      getPostsState.value = 'success';

      postList.value = res;
    }

    return res;
  }

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
    getPosts,
    newPost
  };
});
