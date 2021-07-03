<template>
  <v-container id="app-nav" class="app-nav d-flex" style="clear: both">
    <v-app-bar
      id="app-nav-bar"
      fixed
      color="blue"
      dark
      shrink-on-scroll
      fade-img-on-scroll
      src="https://picsum.photos/1920/1080?random"
      height="768"
    >
      <template v-slot:img="{ props }">
        <v-img
          id="app-nav-bar-image"
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        >
          <div id="title" class="text-h2 mb-5" v-text="title"></div>

          <div id="subtitle" class="text-h5 mb-10" v-text="subtitle"></div>

          <div id="instagram" class="text-h6 mt-10">
            <v-icon large> mdi-instagram </v-icon> {{ instagram }}
          </div>

          <div id="phone" class="text-h6">
            <v-icon large> mdi-phone </v-icon> {{ phone }}
          </div>
        </v-img>
      </template>

      <v-app-bar-title> {{ title }}</v-app-bar-title>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "AppNav",

  data() {
    return {
      title: "Baking Stories by Pranjali",
      subtitle: "Baked with love ♥",
      instagram: "instagram.com/bakingstoriesbypranjali",
      phone: "+91 98765 43210",
      searchString: null,
    };
  },
};
</script>

<style lang="sass" scoped>
#app-nav-bar-image
  text-align: center
  align-items: center
</style>
