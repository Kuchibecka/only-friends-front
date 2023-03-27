<template>
    <q-item-section avatar top>
      <q-avatar size="xl">
        <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label class="text-subtitle1">
        <strong>
          {{ ppost.author_name }}
        </strong>
        <span class="text-grey-7 q-ml-xs">
        {{ "@" + ppost.author_tag }}
      </span>
        <br class="lt-md" />
        &bull; {{ howLongAgo(ppost.date) }}
      </q-item-label>
      <q-item-label class="post-text text-body1 q-pt-xs">
        {{ ppost.text }}
      </q-item-label>
      <div class="row justify-between q-mt-md">
        <q-btn
          @click="toggleLike(ppost)"
          flat
          round
          :color="ppost.liked ? 'red-5' : 'grey'"
          size="sm"
          :icon="ppost.liked ? 'fas fa-heart' : 'far fa-heart'"
        />
        <q-btn flat round color="grey" size="sm" icon="reply" />
        <q-btn flat round color="grey" size="sm" icon="comment" />
        <q-btn
          flat
          round
          color="grey"
          size="sm"
          icon="delete"
          @click="deletePost(ppost)"
        />
      </div>
    </q-item-section>
    <q-btn @click="log">
      LOG!
    </q-btn>
</template>

<script setup lang="ts">
import {Post} from 'components/models';
import {formatDistance} from 'date-fns';
import {ref} from 'vue';

export interface SinglePostProps {
  post: Post
}
const props = defineProps<SinglePostProps>();

let ppost = ref(props.post)

function howLongAgo(date: number) {
  // docs: https://date-fns.org/v2.29.3/docs/Getting-Started
  // console.log('props IS: ', ppost)
  return formatDistance(date, new Date(), { addSuffix: true });
}

function deletePost(post: Post) {
  console.log('Deleting post', post, 'with id: ', post.id);

  // todo: delete post logic
}

function toggleLike(post: Post) {
  post.liked = !post.liked;
  console.log('toggleLike() post is: ', post)
  // todo: edit post logic
}

function log() {
  console.log('props IS: ', ppost)
}
</script>

<style lang="sass">
.post-text
  white-space: pre-line
</style>
