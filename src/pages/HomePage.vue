<template>
  <q-page>
    <NewPostField />
    <q-separator class="post-separator" />

    <!--    <KeepAlive>-->
    <PostList :posts="posts" />
    <!--    </KeepAlive>-->
  </q-page>
</template>

<script setup lang="ts">
import NewPostField from 'components/HomePage/NewPostField.vue';
import {Post} from 'components/models';
import PostList from 'components/HomePage/PostList.vue';

const posts: Post[] = [
  {
    id: 1,
    text: 'first post, new, just posted',
    date: Date.now(),
    author_name: 'authhhor',
    author_tag: 'authhhor',
    liked: true
  },
  {
    id: 2,
    text: 'second post',
    date: 1679934122600,
    author_name: 'sss',
    author_tag: 'ddd',
    liked: false
  },
  {
    id: 3,
    text: '3rd post ',
    date: 1679931122600,
    author_name: 'asd',
    author_tag: 'ASS',
    liked: false
  },
  {
    id: 4,
    text: '4th post',
    date: 1679904122600,
    author_name: 'sdf',
    author_tag: 'hgg',
    liked: false
  },
  {
    id: 5,
    text: '5th post post  post post  post post  post post  post post  post post  post post  post post  post post  post post  post post  post post  post post  post post ',
    date: 1679004122600,
    author_name: 'sdf',
    author_tag: 'hgg',
    liked: false
  },
  {
    id: 6,
    text: '6th post',
    date: 1670004122600,
    author_name: 'sdf',
    author_tag: 'hgg',
    liked: false
  },
  {
    id: 7,
    text: '7 \n t \n h \n\n\n p \n o \n s \n t \n ',
    date: 1670004122600,
    author_name: 'sdf',
    author_tag: 'hgg',
    liked: false
  },

]

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
