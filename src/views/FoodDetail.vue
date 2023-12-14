<template>
  <div class="food-detail">
    <div class="container">
      <NavbarComponentVue />
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods">Foods</router-link>
              </li>
              <li class="breadcrumb-item active fw-bold" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6">
          <img
            :src="'../assets/images/' + products.gambar"
            class="img-fluid shadow rounded"
          />
        </div>
        <div class="col-md-6 mt-3">
          <h2>{{ products.nama }}</h2>
          <h4 class="fw-bold">Rp. {{ products.harga }}</h4>
          <form v-on:submit.prevent>
            <div class="mb-3">
              <label for="jumlah-pesanan" class="form-label"
                >Jumlah pesanan</label
              >
              <input
                type="number"
                class="form-control"
                id="jumlah-pesanan"
                v-model="pesan.jumlah_pemesanan"
              />
            </div>
            <div class="mb-3">
              <label for="keterangan" class="form-label">Keterangan</label>
              <textarea
                class="form-control"
                id="keterangan"
                placeholder="Keterangan seperti: pedas, nasi setengah"
                v-model="pesan.keterangan"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success" @click="pemesanan">
              <b-icon-cart /> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponentVue from "@/components/NavbarComponent.vue";
import axios from "axios";
export default {
  name: "FoodDetail",
  components: {
    NavbarComponentVue,
  },
  data() {
    return {
      products: {},
      pesan: {},
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.pesan.products = this.products;
        axios
          .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {
            this.$toast.success("Berhasil ditambahkan", {
              type: "success",
              position: "top-right",
            });
          })
          .catch((error) => console.log(error));
        this.$router.push({ path: "/keranjang" });
      } else {
        this.$toast.error("Kamu belum mengisi pesanan", {
          // optional options Object
          type: "error",
          position: "top-right",
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>