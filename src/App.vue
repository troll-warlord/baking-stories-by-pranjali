<template>
  <v-app>
    <app-nav></app-nav>
    <v-main class="content"><router-view /></v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppNav from "@/components/AppNav";
import AppFooter from "@/components/AppFooter";

export default {
  name: "App",

  components: {
    AppNav,
    AppFooter,
  },
};
</script>
