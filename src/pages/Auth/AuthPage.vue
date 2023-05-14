<template>
  <q-card square class="shadow-24" style="width:300px;height:485px;">
    <q-card-section class="bg-primary">
      <h4 class="text-h5 text-white q-my-md text-center">{{name}}</h4>
<!--      <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
        <q-btn fab icon="add" color="secondary"/>
      </div>-->
    </q-card-section>
    <q-card-section>
      <q-form class="q-px-sm q-pt-xl">
        <q-input square clearable v-model="email" type="email" label="Email">
          <template v-slot:prepend>
            <q-icon name="email"/>
          </template>
        </q-input>
        <q-input square clearable v-model="password" type="password" label="Password">
          <template v-slot:prepend>
            <q-icon name="lock"/>
          </template>
        </q-input>
      </q-form>
    </q-card-section>
    <q-card-actions class="q-px-lg">
      <q-btn unelevated size="lg" color="secondary" class="full-width text-white" label="Sign In"/>
    </q-card-actions>
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

const name = 'Log in'
const email = ref('');
// const username = ref('');
const password = ref('');

</script>

<style scoped>

</style>
