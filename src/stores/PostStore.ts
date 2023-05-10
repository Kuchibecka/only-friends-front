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

  return {
    getPostsState,
    getPosts
  };
});
