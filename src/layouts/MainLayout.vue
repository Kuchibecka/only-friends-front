<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            class="q-pa-sm lt-md absolute-center"
            size="md"
            color="primary"
            name="fa-solid fa-fan"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      :width="270"
      side="left"
      bordered
    >
      <DrawerTitle :icon="'fa-solid fa-fan'" :title="'OnlyFriends'" />
      <PageSelector />
    </q-drawer>

    <q-drawer show-if-above side="right" bordered>
      <!-- right drawer content -->
      <q-input
        class="q-ma-md"
        label="Search OnlyFriends"
        outlined
        rounded
        dense
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="grey-8"
        navigation
        padding
        height="550px"
        class="q-ma-md text-black shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap">
          <div class="col">
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="row absolute-bottom">
                  <div class="col-3">
                    <q-avatar size="md-md">
                      <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                    </q-avatar>
                  </div>
                  <div class="col-7 q-ml-sm q-mt-sm">
                    <strong>Author's name</strong>
                    <span class="text q-ml-xs"> @author_tag </span>
                  </div>
                </div>
              </q-img>
            </q-card>
          </div>
          <div class="col">
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="row absolute-bottom">
                  <div class="col-3">
                    <q-avatar size="md-md">
                      <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                    </q-avatar>
                  </div>
                  <div class="col-7 q-ml-sm q-mt-sm">
                    <strong>Author's name</strong>
                    <span class="text q-ml-xs"> @author_tag </span>
                  </div>
                </div>
              </q-img>
            </q-card>
          </div>
          <div class="col">
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="row absolute-bottom">
                  <div class="col-3">
                    <q-avatar size="md-md">
                      <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                    </q-avatar>
                  </div>
                  <div class="col-7 q-ml-sm q-mt-sm">
                    <strong>Author's name</strong>
                    <span class="text q-ml-xs"> @author_tag </span>
                  </div>
                </div>
              </q-img>
            </q-card>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="search" size="56px" />
          <div class="q-mt-md text-center">{{ lorem }}</div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="home" size="56px" />
          <div class="q-mt-md text-center">{{ lorem }}</div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="search" size="56px" />
          <div class="q-mt-md text-center">{{ lorem }}</div>
        </q-carousel-slide>
      </q-carousel>
    </q-drawer>

    <q-page-container>
      <router-view /> <!--todo: ??? -->
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DrawerTitle from 'components/LeftDrawer/DrawerTitle.vue';
import PageSelector from 'components/LeftDrawer/PageSelector.vue';

const leftDrawerOpen = ref(false);
const lorem =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.';
const slide = ref('style');

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
