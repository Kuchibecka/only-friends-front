<template>
  <q-card square class="shadow-24" style="width:300px;height:485px;">
    <q-card-section class="bg-primary">
      <h4 class="text-h5 text-white q-my-md text-center">{{ name }}</h4>
      <!--      <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="add" color="secondary"/>
            </div>-->
    </q-card-section>
    <q-card-section>
      <q-form
        class="q-px-sm q-pt-xl"
        @submit="onSubmit"
      >
        <q-input square clearable v-model="email" type="text" label="Email">
          <template v-slot:prepend>
            <q-icon name="email"/>
          </template>
        </q-input>
        <q-input square clearable v-model="password" type="password" label="Password">
          <template v-slot:prepend>
            <q-icon name="lock"/>
          </template>
        </q-input>
        <q-card-actions class="q-px-lg">
          <q-btn unelevated size="lg" color="secondary" type="submit" class="full-width text-white" label="Sign In"/>
        </q-card-actions>
      </q-form>
    </q-card-section>
    <q-card-section class="text-center q-pa-sm">
      <q-item clickable v-ripple exact :to="`/register`">
        <q-item-section class="text-grey-8">
          Not registered yet?
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import {ref} from "vue";
import DrawerTitle from "pages/LeftDrawer/DrawerTitle.vue";
import {useAuthStore} from "stores/AuthStore";
import {LoginData} from "src/model/loginData";
import {Router} from "src/router";
import {useQuasar} from "quasar";

const name = 'Login'
const email = ref('');
// const username = ref('');
const password = ref('');

const authStore = useAuthStore();
const $q = useQuasar();

const onSubmit = () => {
  const loginData: LoginData = {
    email: email.value as string,
    password: password.value as string
  };

  const response = authStore.login(loginData)
    .then( (res) => {
      console.log("res: ", res);
      if ('error' in res) {
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
