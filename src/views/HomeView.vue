<template>
  <div class="home">
    <div class="container">
      <NavbarComponent />
      <HeroVue />
      <div class="row mt-5 mb-3">
        <div class="col-sm">
          <h2>Best Foods</h2>
        </div>
        <div class="col-sm">
          <router-link to="/foods" class="btn btn-success float-end">
            Lihat semua
          </router-link>
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-4 mb-3"
          v-for="product in products"
          :key="product.id"
        >
          <CardProductVue :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/NavbarComponent.vue";
import HeroVue from "@/components/Hero.vue";
import CardProductVue from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    HeroVue,
    CardProductVue,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
