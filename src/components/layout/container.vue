<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app>
      <v-list-item>
        <v-list-item-content>
          <div class="d-flex align-center justify-space-evenly pb-1">
            <v-img src="@/assets/brand.png" max-width="50px" />
            <div class="font-weight-bold text-style ml-2">FVR</div>
          </div>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <layout-sidebar />
    </v-navigation-drawer>
    <layout-appbar @on-click-drawer="() => (drawer = !drawer)" />
    <v-main>
      <v-container class="container-layout pa-7">
        <div
          class="d-flex rounded-lg justify-center align-center flex-column w-full"
        >
          <div class="d-flex align-center w-full flex-row">
            <span style="color: #142a3f" class="text-h5 font-weight-bold"
              >{{ brandTitle }}
            </span>
            <v-spacer></v-spacer>
            <slot name="tools-navigation" />
          </div>
          <div
            class="d-flex mt-4 justify-start flex-column align-center w-full"
          >
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

  drawer = true;
  fixed = false;
  miniVariant = false;
}
</script>
