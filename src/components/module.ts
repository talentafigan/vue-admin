import vue from "vue";

export default function setup() {
  vue.component("layout-container", require("@/components/layout/container.vue").default);
  vue.component("layout-appbar", require("@/components/layout/appbar.vue").default);
  vue.component("layout-sidebar", require("@/components/layout/sidebar.vue").default);
  vue.component("common-pagination" , require("@/components/common/pagination.vue").default);
  vue.component("page-products-form-dialog-filter" , require("@/components/page/products/form-dialog-filter.vue").default);
}
