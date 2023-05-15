<template>
  <q-page>
    <NewPostField/>
    <q-separator class="post-separator"/>

    <!--    <KeepAlive>-->
    <PostList :posts="posts"/>
    <!--    </KeepAlive>-->
  </q-page>
</template>

<script setup lang="ts">
import NewPostField from "pages/PostFeedPage/NewPostField.vue";
import {PostModel} from 'components/models';
import PostList from "pages/PostFeedPage/PostList.vue";
import {onMounted, ref} from "vue";
import {usePostsStore} from "stores/PostStore";
import {useAuthStore} from "stores/AuthStore";

const postsStore = usePostsStore();
onMounted(async () => {
  getPosts();
});

const getPosts = async () => {
  const posts = await postsStore.getPosts();
  const authStore = useAuthStore();
  console.log(authStore.state)

  if ('error' in posts) {
    console.warn('Error loading posts');
    return;
  }

};

const posts = ref<PostModel[]>();

// const fetchDate = await fetch('/api/posts');
</script>

<style lang="sass">
.post-separator
  height: 12px
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
  background: $blue-1
</style>
