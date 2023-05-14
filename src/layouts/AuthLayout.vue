<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page
        class="window-height window-width row justify-center items-center"
        style="background: linear-gradient(white, var(--q-primary));"
      >

        <div class="column q-pa-lg items-center">
          <div class="row q-pb-md">
            <DrawerTitle :icon="'fa-solid fa-fan'" :title="'OnlyFriends'" />
          </div>
          <div class="row">
            <router-view/>
          </div>
        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

import DrawerTitle from "pages/LeftDrawer/DrawerTitle.vue";

// const email = ref('');
// const username = ref('');
// const password = ref('');

</script>

<style scoped>

</style>
