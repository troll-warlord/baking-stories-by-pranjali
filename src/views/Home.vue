<template>
  <v-container fluid id="home" class="home pa-0">
    <app-products></app-products>
  </v-container>
</template>

<script>
import AppProducts from "@/components/AppProducts.vue";

export default {
  name: "Home",

  components: {
    AppProducts,
  },
};
</script>

<style lang="sass" scoped></style>
