<template>
  <q-item
    clickable
    v-ripple
    @click="onClick"
  >
    <!--  exact :to="`/${props.redirectTo}`"  -->
    <q-item-section avatar>
      <q-icon :name="props.icon" size="md"/>
    </q-item-section>

    <q-item-section class="text-h6">
      {{ props.text }}
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import {useAuthStore} from "stores/AuthStore";
import {Router} from "src/router";

const authStore = useAuthStore();

const props = defineProps({
  redirectTo: String,
  icon: String,
  text: String,
});

const onClick = () => {
  if (<string> props.redirectTo === "/signin") {
    authStore.logout();
  }
  Router.push({path: <string> props.redirectTo});
}
</script>

<style scoped></style>
