<script setup lang="ts">
import PageSelectorOption from 'pages/LeftDrawer/PageSelectorOption.vue';

const options = [
  {
    icon: 'account_circle',
    redirect_to: 'profile',
    text: 'My profile'
  },
  {
    icon: 'feed',
    redirect_to: '',
    text: 'News feed'
  },
  {
    icon: 'message',
    redirect_to: 'messages',
    text: 'Messages'
  },
  {
    icon: 'bookmark',
    redirect_to: 'bookmarks',
    text: 'Bookmarks'
  },
  {
    icon: 'notifications',
    redirect_to: 'notifications',
    text: 'Notifications'
  },
  {
    icon: 'list',
    redirect_to: 'lists',
    text: 'Lists'
  },
  {
    icon: 'loyalty',
    redirect_to: 'subscriptions',
    text: 'Subscriptions'
  },
  {
    icon: 'credit_card',
    redirect_to: 'credit_card',
    text: 'Add card'
  },
  {
    icon: 'more_horiz',
    redirect_to: 'about',
    text: 'About'
  },

]

</script>

<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list>
      <PageSelectorOption
        v-for="option in options"
        :icon="option.icon"
        :redirect-to="option.redirect_to"
        :text="option.text" v-bind:key="option.text"
      />
      <div class="q-pt-xl"/>
    </q-list>
  </div>
</template>

<style scoped></style>
