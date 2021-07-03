<template>
  <v-container id="app-footer" class="app-footer">
    <v-footer padless dark absolute class="blue" :app="true">
      <v-card class="flex blue text-center" flat tile>
        <v-card-title class="white justify-center">
          <v-btn
            v-for="(social, index) in socialLinks"
            :key="index"
            class="mx-4 ma-auto"
            :href="social.link"
            light
            icon
          >
            <v-icon size="24px">
              {{ social.icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>Baking Stories by Pranjali</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "AppFooter",

  data() {
    return {
      socialLinks: [
        { icon: "mdi-facebook", link: "https://facebook.com" },
        { icon: "mdi-twitter", link: "https://twitter.com" },
        {
          icon: "mdi-instagram",
          link: "https://instagram.com/bakingstoriesbypranjali",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped></style>
