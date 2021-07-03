<template>
  <v-card
    :loading="loading"
    hover
    class="mx-auto my-12 rounded-xl"
    max-width="374"
  >
    <v-img :src="data.images[0].src"> </v-img>
    <v-card-title>{{ data.name }}</v-card-title>

    <v-card-text>
      <v-chip-group column>
        <v-chip v-for="(tag, index) in data.tags" :key="index" x-small>
          {{ tag }}
        </v-chip>
      </v-chip-group>

      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

      <div class="text-truncate">
        {{ data.description }}
      </div>
    </v-card-text>

    <v-divider class="ma-4"></v-divider>

    <v-row class="pr-10 pb-5">
      <v-spacer></v-spacer>
      <v-col cols="3" align-self="end">
        <card-row-item-details :data="data"></card-row-item-details>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CardRowItemDetails from "@/components/CardRowItemDetails.vue";

export default {
  name: "AppCardItem",

  components: { CardRowItemDetails },

  props: ["data"],

  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style lang="sass" scoped></style>
