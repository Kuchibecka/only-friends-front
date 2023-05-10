<template>
    <q-list separator>
      <transition-group
        appear
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutDown"
      >
        <q-item
          class="q-py-md"
          v-for="(post, index) in props.posts"
          :key="post.id"
        >
          <!--   eslint-disable-next-line vue/no-mutating-props       -->
          <SinglePost :post="props.posts[index]" />
        </q-item>
      </transition-group>
    </q-list>
    <q-btn @click="log">
      LOG!
    </q-btn>
</template>

<script setup lang="ts">
import SinglePost from 'components/HomePage/SinglePost.vue';
import { PostModel } from 'components/models';

export interface PostListProps {
  posts: PostModel[];
}

const props = withDefaults(defineProps<PostListProps>(), {
  posts: () => [],
});

function log() {
  console.log('props IS: ', props.posts)
}

</script>

<style scoped></style>
