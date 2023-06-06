<template>
  <v-app-bar height="55" outlined elevation="0" fixed app>
    <v-app-bar-nav-icon @click.stop="$emit('on-click-drawer')" />
    <v-spacer />

    <v-btn class="mr-2" icon>
      <v-icon size="22">mdi-bell-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class LayoutAppbar extends Vue {}
</script>
