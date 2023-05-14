<template>
  <q-item clickable v-ripple exact :to="`/${props.redirectTo}`">
    <q-item-section avatar>
      <q-icon :name="props.icon" size="md" />
    </q-item-section>

    <q-item-section class="text-h6">
      {{ props.text }}
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
const props = defineProps({
  redirectTo: String,
  icon: String,
  text: String,
});
</script>

<style scoped></style>
