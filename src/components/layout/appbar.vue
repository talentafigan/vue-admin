<template>
  <v-app-bar height="75" outlined elevation="0" fixed app>
    <v-app-bar-nav-icon @click.stop="$emit('on-click-drawer')" />
    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-bell-outline</v-icon>
    </v-btn>

    <v-menu bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <div
          class="d-flex justify-center align-center flex-row mr-3"
          v-bind="attrs"
          v-on="on"
        >
          <v-avatar size="43" class="cursor-pointer ml-3">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <v-icon size="20" class="ml-1">mdi-chevron-down</v-icon>
        </div>
      </template>
      <v-list width="240" nav dense>
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar size="43">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-subtitle-1">
              John Leider
            </v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="my-1"></v-divider>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Account Setting</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class LayoutAppbar extends Vue {}
</script>
