<template>
  <div class="container">
    <navbar-component />
    <h2 class="mb-3 mt-5">Daftar Makanan</h2>
    <div class="row mb-5">
      <div class="col">
        <div class="input-group">
          <input
            v-model="search"
            type="text"
            class="form-control"
            placeholder="Cari makanan kesukaanmu"
            aria-label="Cari"
            aria-describedby="basic-addon2"
            @keyup="searchFood"
          />
          <span class="input-group-text" id="basic-addon2">
            <b-icon-search
          /></span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="product in products" :key="product.id">
        <CardProductVue :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import axios from "axios";
import CardProductVue from "@/components/CardProduct.vue";

export default {
  name: "FoodsView",
  components: {
    NavbarComponent,
    CardProductVue,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood() {
      console.log(this.search);
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>