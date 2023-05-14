<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { $api } from './boot/axios';

let a = ref('asdf');

onMounted(async () => {
  const {data} = await $api.get('/health')
  a.value = data;
})
</script>


<template>
  <h1>{{ a }}</h1>
  <!-- <router-view /> -->
</template>

