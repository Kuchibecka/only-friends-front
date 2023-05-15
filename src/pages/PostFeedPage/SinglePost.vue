<template>
  <q-item-section avatar top>
    <q-avatar size="xl">
      <q-img v-if="profileImg" :src="profileImg" alt="/src/assets/image_not_supported.png"/>
      <q-img v-else src="/src/assets/image_not_supported.png"/>
    </q-avatar>
  </q-item-section>
  <q-item-section>
    <q-item-label class="text-subtitle1">
      <strong>
        {{ ppost.author.email }}
      </strong>
      <span class="text-grey-7 q-ml-xs">
        {{ "@" + ppost.author.nickname }}
      </span>
      <br class="lt-md"/>
      &bull; {{ howLongAgo(ppost.createdAt) }}
    </q-item-label>
    <q-item-label class="post-text text-body1 q-pt-xs">
      {{ ppost.text }}
    </q-item-label>
    <q-img v-for="img in imageUrl" v-bind:key="img" :src="img" alt="Image" />
    <div class="row justify-between q-mt-md">
      <q-btn
        @click="toggleLike(ppost)"
        flat
        round
        :color="ppost.liked ? 'red-5' : 'grey'"
        size="sm"
        :icon="ppost.liked ? 'fas fa-heart' : 'far fa-heart'"
      />
      <q-btn flat round color="grey" size="sm" icon="reply"/>
      <q-btn flat round color="grey" size="sm" icon="comment"/>
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
</template>

<script setup lang="ts">
import {PostModel} from 'components/models';
import {formatDistanceToNow} from 'date-fns';
import {onMounted, ref} from 'vue';
import {$api} from 'boot/axios';

export interface SinglePostProps {
  post: PostModel
}

const props = defineProps<SinglePostProps>();
const imageUrl = ref<string[]>([]);
const profileImg = ref<string>('');

onMounted(async () => {
  for (let fileIndex in props.post.files) {
    imageUrl.value.push(<string> await fetchImage(props.post.files[fileIndex].id));
  }

  if (props.post.author.profile_picture) {
    profileImg.value = await fetchImage(props.post.author.profile_picture.id);
  }
});

let ppost = ref(props.post)

const fetchImage = async (fileId: string) => {
  try {
    const response = await $api.get('/files/' + fileId, {
      responseType: 'arraybuffer',
    })
    const base64 = btoa(
      new Uint8Array(response.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    )

    return `data:image/png;base64,${base64}`;

  } catch (error) {
    console.error(error)
  }
}

function howLongAgo(date: string) {
  // docs: https://date-fns.org/v2.29.3/docs/Getting-Started
  return formatDistanceToNow(Date.parse(date));
}

function deletePost(post: PostModel) {
  console.log('Deleting post', post, 'with id: ', post.id);

  // todo: delete post logic
}

function toggleLike(post: PostModel) {
  // post.liked = !post.liked;
  console.log('toggleLike() post is: ', post)
  // todo: edit post logic
}
</script>

<style lang="sass">
.post-text
  white-space: pre-line
</style>
