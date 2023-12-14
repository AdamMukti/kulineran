<template>
  <div id="app">
    <router-view />
    <FooterVue />
  </div>
</template>


<script>
import FooterVue from "@/components/Footer.vue";

export default {
  components: { FooterVue },
};
</script>

<style>
</style>
