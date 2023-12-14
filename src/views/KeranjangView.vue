<template>
  <div class="keranjang">
    <div class="container">
      <NavbarComponentVue :updateKeranjang="keranjangs"/>
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
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <h2>Keranjang Saya</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Foto</th>
                <th scope="col">Makanan</th>
                <th scope="col">Keterangan</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Harga</th>
                <th scope="col">Total Harga</th>
                <th scope="col">Hapus</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(keranjang, i) in keranjangs" :key="keranjang.id">
                <td>{{ i + 1 }}</td>
                <td>
                  <img
                    :src="'../assets/images/' + keranjang.products.gambar"
                    class="img-fluid shadow img-keranjang"
                  />
                </td>
                <td>{{ keranjang.products.nama }}</td>
                <td>{{ keranjang.keterangan }}</td>
                <td>{{ keranjang.jumlah_pemesanan }}</td>
                <td>{{ keranjang.products.harga }}</td>
                <td>
                  {{ keranjang.products.harga * keranjang.jumlah_pemesanan }}
                </td>
                <td>
                  <div
                    class="btn btn-danger"
                    @click="hapusKeranjang(keranjang.id)"
                  >
                    <b-icon-trash />
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="6" class="text-end">Total Harga:</td>
                <td>{{ totalHarga }}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
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
      keranjangs: [],
    };
  },
  methods: {
    getKeranjang() {
      axios
        .get("http://localhost:3000/keranjangs")
        .then((response) => this.setKeranjang(response.data))
        .catch((error) => console.log(error));
    },
    setKeranjang(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          this.$toast.error("Berhasil dihapus", {
            type: "error",
            position: "top-right",
          });
          this.getKeranjang();
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getKeranjang();
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>

<style>
</style>