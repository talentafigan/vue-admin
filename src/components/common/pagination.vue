<template>
  <v-row>
    <v-col cols="6">
      <div class="d-flex justify-start flex-row align-center">
        <span style="font-size: 14px; color: #626262" class="font-weight-medium"
          >Show rows per page
        </span>
        <v-select
          style="max-width: 70px"
          dense
          class="ml-3"
          v-model="pageable.perPage"
          hide-details="auto"
          item-text="text"
          item-value="value"
          :items="[
            {
              text: '5',
              value: 5,
            },
            {
              text: '10',
              value: 10,
            },
            {
              text: '15',
              value: 15,
            },
            {
              text: 'All',
              value: '',
            },
          ]"
        ></v-select>
      </div>
    </v-col>
    <v-col cols="6">
      <div class="w-full d-flex justify-end align-center flex-row">
        <div class="d-flex justify-center align-center flex-row">
          <span
            style="font-size: 14px; color: #626262"
            class="font-weight-medium"
            >1</span
          >
          <span
            style="font-size: 14px; color: #a3a5a9"
            class="font-weight-medium ml-2"
            >of</span
          >
          <span
            style="font-size: 14px; color: #626262"
            class="font-weight-medium ml-2"
            >10</span
          >
        </div>
        <div class="d-flex justify-center align-center flex-row ml-4">
          <v-btn small icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn class="ml-4" small icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { interfacePagination } from "@/types/interface";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class CommonPagination extends Vue {
  @Prop()
  value!: interfacePagination;

  get pageable() {
    return this.value;
  }

  set pageable(val) {
    this.$emit("input", val);
  }
}
</script>
