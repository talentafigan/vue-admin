<template>
  <layout-container brand-title="Products">
    <template #tools-navigation>
      <v-btn outlined small depressed color="primary">
        <v-icon small> mdi-file-download-outline </v-icon>
        Export Report
      </v-btn>
      <v-btn class="ml-2" small depressed color="primary">
        <v-icon small> mdi-plus </v-icon>
        Add Product
      </v-btn>
    </template>
    <v-row class="w-full">
      <v-col cols="6">
        <v-text-field
          append-icon="mdi-magnify"
          label="Search product"
          single-line
          dense
          solo
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-select
          single-line
          solo
          dense
          :items="listCategory"
          label="Category"
        ></v-select>
      </v-col>
      <v-col cols="3">
        <v-select
          single-line
          solo
          dense
          :items="[
            'Sales: Best',
            'Sales: Lowest',
            'Stock: Most',
            'Stock: Lowest',
          ]"
          label="Sort By"
        ></v-select>
      </v-col>
    </v-row>
    <v-data-table
      :headers="tableHeader"
      :items="products"
      :items-per-page="5"
      class="elevation-1 w-full"
    >
      <template #[`item.info`]="row">
        <div class="d-flex justify-center align-start flex-column pa-2">
          <v-img :src="row.item.image" class="ml-3" width="40" />
          <span class="mt-2 text-caption">{{ row.item.name }}</span>
        </div>
      </template>
      <template #[`item.action`]>
        <v-menu bottom offset-y>
          <template #activator="{ on, attrs }">
            <v-btn v-on="on" v-bind="attrs" icon>
              <v-icon> mdi-chevron-down </v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item>
              <v-list-item-title>Detail</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Delete</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </layout-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ProductsData from "@/utils/data/products.json";

@Component
export default class Product extends Vue {
  tableHeader = [
    {
      text: "Product info",
      value: "info",
      sortable: false,
    },
    {
      text: "Category",
      value: "category",
      sortable: false,
    },
    {
      text: "COGS",
      value: "cogs",
      sortable: false,
    },
    {
      text: "Sale Price",
      value: "salePrice",
      sortable: false,
    },
    {
      text: "Sales",
      value: "sales",
      sortable: false,
    },
    {
      text: "Stock",
      value: "stock",
      sortable: false,
    },
    {
      text: "Status",
      value: "status",
      sortable: false,
    },
    {
      text: "Action",
      value: "action",
      sortable: false,
    },
  ];
  products = ProductsData;
  listCategory = ["Otomotif", "Electronic", "Wedding"];
}
</script>
