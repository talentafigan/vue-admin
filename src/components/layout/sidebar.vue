<template>
  <v-list v-model="selected" nav dense>
    <v-list-item-group v-for="(group, i) in items" :key="i" color="primary">
      <template>
        <v-subheader v-if="group.title">{{ group.title }}</v-subheader>
        <template v-for="(menu, j) in group.child">
          <template v-if="menu.child">
            <v-list-group :key="j" no-action>
              <template #activator>
                <v-list-item-icon>
                  <v-icon color="" size="20">{{ menu.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ menu.title }}</v-list-item-title>
                </v-list-item-content>
              </template>
              <template v-for="(child, ci) in menu.child">
                <v-list-item :key="ci" :to="child.to">
                  <v-list-item-content>
                    <v-list-item-title>{{ child.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list-group>
          </template>
          <template v-if="menu.to && !menu.child">
            <v-list-item :key="j" :to="menu.to">
              <v-list-item-icon>
                <v-icon size="20">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{ menu.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </template>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { interfaceSidebar } from "@/types/interface";

@Component
export default class LayoutSidebar extends Vue {
  get currentRouter() {
    return this.$route.path;
  }

  selected = null;
  items: interfaceSidebar[] = [
    {
      child: [
        {
          icon: "mdi-poll",
          title: "Dashboard",
          to: "/",
        },
      ],
    },
    {
      title: "Business",
      child: [
        {
          title: "Product",
          icon: "mdi-package-variant-closed",
          to: "/products",
        },
        {
          icon: "mdi-list-box-outline",
          title: "Transaction",
          to: "/transaction",
        },
        {
          icon: "mdi-truck-fast-outline",
          title: "Shipment",
          child: [
            {
              title: "Shipment List",
              to: "transaction/shipment",
            },
            {
              title: "Shipment Setting",
              to: "transaction/cancelation",
            },
          ],
        },
        {
          icon: "mdi-bullhorn-outline",
          title: "Champaign",
          child: [
            {
              title: "Promotion",
              to: "champaign/promotion",
            },
            {
              title: "Voucher",
              to: "voucher",
            },
          ],
        },
      ],
    },
    {
      title: "Administrator",
      child: [
        {
          title: "User Management",
          icon: "mdi-account-group-outline",
          child: [
            {
              title: "User List",
              to: "/user-management/users",
            },
            {
              title: "Role",
              to: "/user-management/role",
            },
            {
              title: "Access Settings",
              to: "/user-management/access",
            },
          ],
        },
      ],
    },
    {
      title: "Report",
      child: [
        {
          title: "Product",
          icon: "mdi-chart-box-outline",
          to: "report/transaction",
        },
        {
          title: "Transaction",
          icon: "mdi-chart-box-outline",
          to: "report/transaction",
        },
      ],
    },
  ];
}
</script>

<style></style>
