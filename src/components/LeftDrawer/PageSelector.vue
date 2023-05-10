<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list>
      <PageSelectorOption :icon="'home'" :redirect-to="''" :text="'Home'" />

      <PageSelectorOption
        :icon="'notifications'"
        :redirect-to="'notifications'"
        :text="'Notifications'"
      />

      <PageSelectorOption
        :icon="'message'"
        :redirect-to="'messages'"
        :text="'Messages'"
      />

      <PageSelectorOption
        :icon="'bookmark'"
        :redirect-to="'bookmarks'"
        :text="'Bookmarks'"
      />

      <PageSelectorOption
        :icon="'list'"
        :redirect-to="'lists'"
        :text="'Lists'"
      />

      <PageSelectorOption
        :icon="'loyalty'"
        :redirect-to="'subscriptions'"
        :text="'Subscriptions'"
      />

      <PageSelectorOption
        :icon="'credit_card'"
        :redirect-to="'credit_card'"
        :text="'Add card'"
      />

      <PageSelectorOption
        :icon="'account_circle'"
        :redirect-to="'profile'"
        :text="'My profile'"
      />

      <PageSelectorOption
        :icon="'more_horiz'"
        :redirect-to="'more'"
        :text="'More'"
      />

      <div class="q-pt-xl" />

      <q-item
        to="/new_post"
        clickable
        v-ripple
        class="bg-primary text-white"
        style="border-radius: 30px"
      >
        <q-item-section avatar>
          <q-icon color="white" name="add" size="md" />
        </q-item-section>

        <q-item-section class="text-h6">NEW POST</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import PageSelectorOption from 'components/LeftDrawer/PageSelectorOption.vue';

</script>

<style scoped></style>
