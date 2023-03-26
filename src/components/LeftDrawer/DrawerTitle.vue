<template>
  <q-toolbar-title class="text-weight-bold">
    <q-icon class="q-pa-sm" size="lg" color="primary" :name="`${props.icon}`" />
    {{ props.title }}
  </q-toolbar-title>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  icon: String,
});
</script>

<style scoped></style>
