<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page
        class="window-height window-width row justify-center items-center"
        style="background: linear-gradient(#8274c5, #5A4A9F);"
      >
        <!--    <div class="column q-pa-lg">
              <div class="row">
                <AuthComponent/>
              </div>
            </div>

            <div class="column q-pa-lg">
              <div class="row">
                <RegistrationComponnet/>
              </div>
            </div>-->

        <div class="column q-pa-lg items-center">
          <div class="row">
            <h1>OnlyFriends</h1>
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

const name = 'Login'
// const email = ref('');
// const username = ref('');
// const password = ref('');

</script>

<style scoped>

</style>
