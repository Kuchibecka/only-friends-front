<template>
  <div>
    <div class="row q-pt-xl q-px-md q-pb-md items-center ">
      <q-avatar size="220px">
        <q-img :src="profileImg"/>
      </q-avatar>
      <div class="column q-pl-lg items-start">
        <div class="nickname">
          @{{ profileInfo.nickname }}
        </div>
        <div class="text-subtitle2 text-weight-light q-pt-sm">
          {{ profileInfo.email }}
        </div>
<!--        <div class="q-pt-lg text-weight-light">
          *todo: subscribers (overlapping avatars)*
&lt;!&ndash;  https://quasar.dev/vue-components/avatar#example&#45;&#45;overlapping-avatars        &ndash;&gt;
        </div>-->
      </div>
    </div>

    <q-separator class="post-separator"/>
    <PostList :posts="posts"/>

<!--    <q-btn label="Edit Profile" @click="showEditProfileDialog = true"/>
    <q-dialog v-model="showEditProfileDialog">
      <q-card>
        <q-card-section>
          <h2>Edit Profile</h2>
          <q-form @submit.prevent="updateProfile">
            <q-input v-model="userData.username" label="Username"/>
            <q-input v-model="userData.email" label="Email" type="email"/>

            <q-btn type="submit" label="Save" :loading="loading"/>
            &lt;!&ndash;            <p v-if="error">{{ error.message }}</p>&ndash;&gt;
          </q-form>
        </q-card-section>
        <q-card-actions>
          <q-btn label="Cancel" @click="showEditProfileDialog = false"/>
        </q-card-actions>
      </q-card>
    </q-dialog>-->

    <q-page-scroller expand position="top" :scroll-offset="200" :offset="[0, 0]">
      <div class="row cursor-pointer q-pa-sm scroller justify-between">
        <div class="col-1">
          <q-avatar class="q-ml-sm" size="70px">
            <q-img :src="profileImg"/>
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
import {$api} from "boot/axios";

interface UserData {
  username: string
  email: string
}

interface User {
  username: string
  email: string
}

const name = 'Profile';
// const user = ref<User>({username: 'Adele', email: 'adele-One-Love@gmail.com'})
// const userData = ref<UserData>({username: 'adasd', email: '123@gmail.com'})
// const showEditProfileDialog = ref(false);
let posts = ref<PostModel[]>();
const postsStore = usePostsStore();
const profileInfo = {
  email: localStorage.getItem('email') as string,
  nickname: localStorage.getItem('nickname') as string,
  id: localStorage.getItem('user_id') as string,
  profile_picture: localStorage.getItem('profile_picture') as string
}
const profileImg = ref<string>('');

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

onMounted( async () => {
  posts.value = await getProfilePosts();
  // profileImg.value = await fetchImage(userData.value);
  profileImg.value = await fetchImage(<string> profileInfo.profile_picture);
})

const getProfilePosts = async () => {
  // const posts = await postsStore.getUserPosts(<string>localStorage.getItem('user_id'));
  const posts = await postsStore.getUserPosts("1");
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
