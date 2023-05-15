<template>
  <div>
    <div class="row q-pt-xl q-px-md q-pb-md items-center ">
      <q-avatar size="220px">
        <img src="https://cdn.quasar.dev/img/avatar2.jpg"/>
      </q-avatar>
      <div class="column q-pl-lg items-start">
        <div class="nickname">
          @{{ profileInfo.nickname }}
        </div>
        <div class="text-subtitle2 text-weight-light q-pt-sm">
          {{ profileInfo.email }}
        </div>
        <div class="q-pt-lg text-weight-light">
          *todo: subscribers (overlapping avatars)*
<!--  https://quasar.dev/vue-components/avatar#example--overlapping-avatars        -->
        </div>
      </div>
    </div>

    <q-separator class="post-separator"/>
    <PostList :posts="posts"/>

    <q-btn label="Edit Profile" @click="showEditProfileDialog = true"/>
    <q-dialog v-model="showEditProfileDialog">
      <q-card>
        <q-card-section>
          <h2>Edit Profile</h2>
          <q-form @submit.prevent="updateProfile">
            <q-input v-model="userData.username" label="Username"/>
            <q-input v-model="userData.email" label="Email" type="email"/>

            <q-btn type="submit" label="Save" :loading="loading"/>
            <!--            <p v-if="error">{{ error.message }}</p>-->
          </q-form>
        </q-card-section>
        <q-card-actions>
          <q-btn label="Cancel" @click="showEditProfileDialog = false"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-scroller expand position="top" :scroll-offset="200" :offset="[0, 0]">
      <div class="row cursor-pointer q-pa-sm scroller justify-between">
        <div class="col-1">
          <q-avatar class="q-ml-sm" size="70px">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg"/>
          </q-avatar>
        </div>
        <div class="col-10">
          <div class="nickname">
            @{{profileInfo.nickname}}
          </div>
        </div>
      </div>
    </q-page-scroller>

  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import PostList from "pages/PostFeedPage/PostList.vue";
import {PostModel} from "components/models";
import {usePostsStore} from "stores/PostStore";
import {MeResponse} from "src/service/AuthService";

interface UserData {
  username: string
  email: string
}

interface User {
  username: string
  email: string
}

const name = 'Profile';
const user = ref<User>({username: 'Adele', email: 'adele-One-Love@gmail.com'})
const userData = ref<UserData>({username: 'adasd', email: '123@gmail.com'})
const showEditProfileDialog = ref(false);
let posts = ref<PostModel[]>();
const postsStore = usePostsStore();
const profileInfo: MeResponse = {
  email: localStorage.getItem('email') as string,
  nickname: localStorage.getItem('nickname') as string,
  id: localStorage.getItem('user_id') as string,
  profile_picture: localStorage.getItem('profile_picture') as string
}

onMounted( async () => {
  posts.value = await getProfilePosts();
  console.log(profileInfo.email)
})

const getProfilePosts = async () => {
  // const posts = await postsStore.getUserPosts(<string>localStorage.getItem('user_id'));
  const posts = await postsStore.getUserPosts("1");
  console.log(posts);
  console.log(JSON.parse(<string> localStorage.getItem('posts')));
  return JSON.parse(<string> localStorage.getItem('posts'));
};


</script>

<style lang="sass">
.post-separator
  height: 12px
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
  background: $blue-1
.nickname
    font-size: 3.75rem
    line-height: 3.75rem
    letter-spacing: -.00833em
    font-weight: bold
.scroller
    background-color: #ffffff
    flex: content
</style>
