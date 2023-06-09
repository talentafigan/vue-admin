<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app>
      <v-menu bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-card
            elevation="0"
            rounded="lg"
            class="d-flex ma-2 pa-2 justify-start align-center flex-row"
            v-bind="attrs"
            v-on="on"
          >
            <v-avatar color="primary" size="40" class="cursor-pointer">
              <span class="white--text">AM</span>
            </v-avatar>
            <div class="d-flex ml-4 justify-center align-start flex-column">
              <span class="font-weight-semibold">Anthony Mark</span>
              <span class="text-caption">Administrator</span>
            </div>
            <v-spacer></v-spacer>
            <v-icon size="20">mdi-chevron-down</v-icon>
          </v-card>
        </template>
        <v-list nav dense>
          <v-divider class="my-1"></v-divider>
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-item-icon>
                <v-icon size="20">mdi-account</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Account Setting</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon size="20">mdi-logout-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-content @click="onClickLogout">
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
      <v-divider />
      <layout-sidebar />
    </v-navigation-drawer>
    <layout-appbar @on-click-drawer="() => (drawer = !drawer)" />
    <v-main>
      <div class="d-flex white align-center w-full flex-row py-3 px-7">
        <v-btn v-if="back" class="mr-2" icon>
          <v-icon size="22" color="black" @click="$router.back()"
            >mdi-arrow-left</v-icon
          >
        </v-btn>
        <span class="text-h6">{{ brandTitle }} </span>
        <v-spacer></v-spacer>
        <slot name="tools-navigation" />
      </div>
      <v-divider></v-divider>
      <v-container class="container-layout">
        <div
          class="d-flex pa-2 rounded-lg justify-center align-center flex-column w-full"
        >
          <div class="d-flex justify-start flex-column align-center w-full">
            <slot />
          </div>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class Container extends Vue {
  @Prop({ type: String })
  brandTitle!: string;

  @Prop({ type: Boolean, default: false })
  back!: boolean;

  drawer = true;
  fixed = false;
  miniVariant = false;

  onClickLogout() {
    this.$store.commit("auth/resetAuth");
    this.$nextTick(() => {
      window.location.reload();
    });
  }
}
</script>
