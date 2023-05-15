<template>
  <q-card square class="shadow-24" style="width:300px;height:500px;">
    <q-card-section class="bg-primary">
      <h4 class="text-h5 text-white q-my-md text-center">{{ name }}</h4>
      <!--      <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="close" color="purple-4" />
            </div>-->
    </q-card-section>
    <q-card-section>
      <q-form
        class="q-px-sm q-pt-xl q-pb-lg"
        @submit="onSubmit"
      >
        <q-input square clearable v-model="email" type="email" label="Email">
          <template v-slot:prepend>
            <q-icon name="email"/>
          </template>
        </q-input>
        <q-input
          square
          clearable
          v-model="nickname"
          type="text"
          label="Nickname">
          <template v-slot:prepend>
            <q-icon name="person"/>
          </template>
        </q-input>
        <q-input
          square
          clearable
          v-model="password"
          type="password"
          label="Password"
        >
          <template v-slot:prepend>
            <q-icon name="lock"/>
          </template>
        </q-input>
        <q-card-actions class="q-px-lg">
          <q-btn unelevated size="lg" color="secondary" type="submit" class="full-width text-white"
                 label="Get Started"/>
        </q-card-actions>
        <q-card-section class="text-center q-pa-sm">
          <q-item clickable v-ripple exact :to="`/login`">
            <q-item-section class="text-grey-8">
              Return to login
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-form>
    </q-card-section>

  </q-card>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useAuthStore} from "stores/AuthStore";
import {SignupData} from "src/model/loginData";
import router, {Router} from "src/router";
import {useQuasar} from "quasar";

const name = 'Register'
const email = ref('');
const nickname = ref('');
const password = ref('');

const authStore = useAuthStore();
const $q = useQuasar();

const onSubmit = () => {
  const signupData: SignupData = {
    email: email.value as string,
    password: password.value as string,
    nickname: nickname.value as string
  };
  console.log('signupData: ', signupData);

  const response = authStore.signup(signupData)
    .then( (res) => {
      if ('error' in res) {
        console.log("res: ", res);
        $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: res.error.response.data.message
        });
        authStore.logout();
      } else {
        Router.push({path: '/'});
      }
    });
};

</script>

<style scoped>

</style>
