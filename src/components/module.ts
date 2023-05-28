import vue from "vue";

export default function setup() {
  vue.component(
    "layout-container",
    require("@/components/layout/container.vue").default
  );
  vue.component("layout-appbar", require("@/components/layout/appbar.vue").default);
  vue.component("layout-sidebar", require("@/components/layout/sidebar.vue").default);
}
