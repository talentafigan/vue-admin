<template>
  <v-form>
    <v-row dense class="ma-0">
      <v-col cols="12">
        <span>Category</span>
        <v-select class="mt-2" hide-details="auto" dense outlined></v-select>
      </v-col>
      <v-col class="mt-1" cols="12">
        <span>Sort</span>
        <v-select class="mt-2" hide-details="auto" dense outlined></v-select>
      </v-col>
      <v-col class="mt-1" cols="12">
        <span>Status</span>
        <br />
        <v-btn-toggle color="primary" class="mt-2" dense>
          <v-btn> Active </v-btn>
          <v-btn> Non-Active </v-btn>
          <v-btn> Waiting Approval </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class PageProductsFormDialogFilter extends Vue {}
</script>
