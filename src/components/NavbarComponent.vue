<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <a class="navbar-brand" href="">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/foods">Foods</router-link>
        </li>
      </ul>
      <ul class="navbar-nav d-flex">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/keranjang"
            >Keranjang <b-icon-cart></b-icon-cart
            ><span class="badge bg-success ms-1">{{
              updateKeranjang ? updateKeranjang.length : jumlah_pesanan
            }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "NavbarComponent",
  props: ["updateKeranjang"],
  data() {
    return {
      jumlah_pesanan: 0,
    };
  },
  methods: {
    setJumlahPesanan(data) {
      this.jumlah_pesanan = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setJumlahPesanan(response.data.length))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>