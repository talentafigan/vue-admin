<template>
  <layout-container back brand-title="Detail product">
    <v-card outlined class="w-full pt-5 px-5">
      <v-row dense no-gutters class="ma-0">
        <v-col cols="12" md="6">
          <page-products-form autoFill />
        </v-col>
      </v-row>
      <v-divider class="mt-5"></v-divider>
      <v-btn class="my-3" depressed color="accent"> UPDATE PRODUCT </v-btn>
    </v-card>
  </layout-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class DetailProduct extends Vue {}
</script>
