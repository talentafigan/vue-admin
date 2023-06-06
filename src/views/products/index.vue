<template>
  <layout-container brand-title="Product">
    <template #tools-navigation>
      <v-btn
        @click="$router.push('/products/create')"
        depressed
        small
        color="info"
      >
        <v-icon small class="mr-1"> mdi-plus </v-icon>
        <span class="font-weight-semibold">CREATE PRODUCT</span>
      </v-btn>
    </template>
    <v-row dense class="w-full">
      <v-col cols="6">
        <v-text-field
          dense
          solo
          hide-details="auto"
          append-icon="mdi-magnify"
          label="Search product"
        >
          <template v-slot:append-outer>
            <div class="d-flex justify-center items-center flex-col h-full">
              <button class="btn-filter px-4" @click="dialogFilter = true">
                <v-icon size="20">mdi-filter-plus-outline</v-icon>
              </button>
            </div>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <v-dialog v-model="dialogFilter" width="480">
      <v-card>
        <v-card-title>
          <span class="text-h6 font-weight-semibold">Filter</span>
        </v-card-title>
        <v-divider class="mx-2"></v-divider>
        <div class="px-5 mt-4">
          <page-products-form-dialog-filter />
        </div>
        <v-divider class="mx-2 mt-5"></v-divider>
        <v-card-actions>
          <v-spacer> </v-spacer>
          <v-btn color="accent" text> RESET </v-btn>
          <v-btn depressed color="accent"> SAVE FILTER </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card class="w-full mt-3" outlined>
      <v-data-table
        :headers="tableHeader"
        :items="products"
        hide-default-footer
        :items-per-page="pageable.perPage"
        class="elevation-0 w-full"
      >
        <template #[`item.info`]="row">
          <div class="d-flex justify-center align-start flex-row pa-2">
            <v-img :src="row.item.image" width="40" />
            <span class="ml-3 text-caption">{{ row.item.name }}</span>
          </div>
        </template>
        <template #[`item.action`]>
          <v-menu bottom left offset-y>
            <template #activator="{ on, attrs }">
              <v-btn v-on="on" v-bind="attrs" icon>
                <v-icon> mdi-chevron-down </v-icon>
              </v-btn>
            </template>
            <v-list width="100" dense>
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
    </v-card>
    <div class="w-full d-flex justify-end alogn-center px-2 flex-row mt-6">
      <common-pagination v-model="pageable" />
    </div>
  </layout-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ProductsData from "@/utils/data/products.json";
import { interfacePagination, interfaceProduct } from "@/types/interface";

@Component
export default class Product extends Vue {
  dialogFilter = false;
  pageable: interfacePagination = {
    page: 1,
    perPage: 5,
    size: 0,
  };
  tableHeader = [
    {
      text: "Product info",
      value: "info",
      sortable: false,
      width: 250,
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
  products = [] as interfaceProduct[];

  fetchProduct() {
    try {
      this.products = ProductsData;
      this.pageable = {
        page: 1,
        size: 10,
        perPage: 5,
      };
    } catch (error) {
    } finally {
    }
  }

  mounted() {
    this.fetchProduct();
  }
  listCategory = ["Otomotif", "Electronic", "Wedding"];
}
</script>
