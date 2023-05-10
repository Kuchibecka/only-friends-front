<template>
  <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
    <div class="col">
      <q-input
        bottom-slots
        v-model="newPostText"
        placeholder="Compose new post..."
        class="new-post"
        counter
        maxlength="280"
        autogrow
      >
        <!--    todo: whatis :dense="dense" param    -->
        <template v-slot:before>
          <q-avatar size="xl">
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          </q-avatar>
        </template>
      </q-input>
    </div>
    <div class="col-shrink">
      <q-btn
        @click="addNewPost()"
        class="q-mb-lg"
        :disable="!newPostText"
        unelevated
        rounded
        color="primary"
        label="Post!"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PostModel } from 'components/models';

let newPostText = ref('');
function addNewPost() {
  let newPost: PostModel = {
    text: newPostText.value,
    date: Date.now(),
    liked: false,
    author_name: '?',
    author_tag: '?',
    id: 0
  };
  // todo: add post creation logic
  console.log(newPost);
  newPostText.value = '';
}
</script>

<style lang="sass">
.new-post
  textarea
    font-size: 19px
    line-height: 1.3 !important
</style>
