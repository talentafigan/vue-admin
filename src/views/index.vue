<template>
  <layout-container brandTitle="Dashboard">
    <v-row dense no-gutters class="ma-0 w-full">
      <v-col cols="12">
        <v-card outlined class="px-5 py-5">
          <v-row dense class="ma-0 w-full">
            <v-col cols="12">
              <span class="text-h6">Analytics overview</span>
              <v-row class="w-full mt-4 ma-0">
                <v-col v-for="(item, Index) in analytics" :key="Index" md="3">
                  <page-dashboard-card-analytic v-bind="item" />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="ma-0 mt-5 w-full">
            <v-col cols="12">
              <span class="text-h6">Statistic</span>
              <v-row align="center" class="w-full ma-0 py-0">
                <v-col cols="7">
                  <page-dashboard-chart-order-sales />
                </v-col>
                <v-col cols="5">
                  <page-dashboard-chart-order-category />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense no-gutters class="ma-0 mt-4 w-full">
      <v-col cols="12">
        <v-card outlined class="px-5 py-5">
          <v-row class="ma-0 w-full">
            <v-col cols="12">
              <span class="text-h6">Most Sales Product</span>
              <v-card rounded="0" outlined class="w-full mt-4">
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Product Name</th>
                        <th>Category</th>
                        <th>Transaction</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in mostSalesProduct" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.category }}</td>
                        <td>{{ item.sales }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </layout-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ProductData from "@/utils/data/products.json";

@Component
export default class Index extends Vue {
  analytics = [
    {
      color: "#FFF59D",
      title: "Profit Total",
      content: "$132.300",
      description: "5% vs last month",
    },
    {
      color: "#E8EAF6",
      title: "Transaction",
      content: "2.300",
      description: "5% of total goals",
    },
    {
      color: "#E1BEE7",
      title: "Total Visitor",
      content: "8.900",
      description: "5% of last month",
    },
    {
      color: "#E1BEE7",
      title: "Convertion rate",
      content: "40.3%",
      description: "5% of last month",
    },
  ];
  mostSalesProduct = ProductData;
}
</script>
