<template>
  <div class="hero">
    <div class="d-none d-md-block">
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu</strong>, <br />in your gadget.
              </h2>
              <p>Ayo segera pesen dan pilih makanan favorit anda.</p>
              <router-link class="btn btn-success mt-3" to="/foods">Pesan Sekarang</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/hero.png" class="img-fluid" />
        </div>
      </div>
    </div>
    <div class="d-md-none d-sm-block">
      <div class="row mt-3">
        <div class="col-md-6 mb-3">
          <img src="../assets/images/hero.png" class="img-fluid" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu</strong>, <br />in your gadget.
              </h2>
              <p>Ayo segera pesen dan pilih makanan favorit anda.</p>
              <div class="btn btn-success mt-3">Pesan Sekarang</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroVue",
};
</script>

<style>
</style>