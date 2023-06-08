<template>
  <v-form>
    <v-row dense class="ma-0">
      <v-col cols="12">
        <span class="text-subtitle-2 font-weight-normal">Category</span>
        <v-select
          v-model="form.category"
          :items="categoryData"
          class="mt-2"
          hide-details="auto"
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col class="mt-1" cols="12">
        <span class="text-subtitle-2 font-weight-normal">Name</span>
        <v-text-field
          class="mt-2"
          v-model="form.name"
          hide-details="auto"
          dense
          outlined
        ></v-text-field>
      </v-col>
      <v-col class="mt-1" cols="12">
        <span class="text-subtitle-2 font-weight-normal">Images</span>
        <v-row dense class="mt-2">
          <v-col v-for="(item, index) in form.images" :key="index" md="2">
            <common-image-bulk-preview
              :value="item"
              @delete="onDeleteImage(index)"
            />
          </v-col>
          <v-col md="2">
            <common-image-bulk-picker @on-file-selected="onInputImage" />
          </v-col>
        </v-row>
      </v-col>
      <v-col class="mt-1" cols="12">
        <span class="text-subtitle-2 font-weight-normal">Stock</span>
        <v-text-field
          type="number"
          v-model="form.stock"
          class="mt-2"
          hide-details="auto"
          dense
          outlined
        ></v-text-field>
      </v-col>
      <v-col class="mt-1" cols="12" md="6">
        <span class="text-subtitle-2 font-weight-normal"
          >Cost Of Good Sold (COGS)</span
        >
        <v-text-field
          prefix="$"
          v-model="form.cogs"
          class="mt-2"
          hide-details="auto"
          dense
          outlined
        ></v-text-field>
      </v-col>
      <v-col class="mt-1" cols="12" md="6">
        <span class="text-subtitle-2 font-weight-normal">Sale Price</span>
        <v-text-field
          prefix="$"
          v-model="form.salePrice"
          class="mt-2"
          hide-details="auto"
          dense
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import { interfaceProduct } from "@/types/interface";
import Vue from "vue";
import Component from "vue-class-component";
import ProductsData from "@/utils/data/products.json";
import { Prop } from "vue-property-decorator";

@Component
export default class PageProductsForm extends Vue {
  @Prop({ type: Boolean, default: false })
  autoFill!: boolean;

  categoryData = ["Clothing"];

  form: interfaceProduct = {
    category: "",
    name: "",
    cogs: 0,
    salePrice: 0,
    stock: 0,
    images: [] as string[],
  };

  onDeleteImage(index: number) {
    this.form.images.splice(index, 1);
  }

  onInputImage(image: any) {
    if (!image) {
      return;
    }
    const imageUrl: string = URL.createObjectURL(image);
    this.form.images.push(imageUrl);
  }

  autoFillForm() {
    if (this.autoFill) {
      this.form = ProductsData[0];
    }
  }

  mounted() {
    this.autoFillForm();
  }
}
</script>
