<template>
  <v-container
    fluid
    id="app-products"
    class="app-products pa-6"
    style="margin-top: 800px"
  >
    <v-row>
      <v-col cols="12" md="9">
        <div class="text-h4">Items</div>
      </v-col>
      <v-col cols="12" md="3">
        <v-select
          v-model="filters"
          :items="allFilters"
          chips
          label="Filters"
          multiple
          solo
          rounded
          deletable-chips
        ></v-select>
      </v-col>
    </v-row>
    <v-divider class="mb-8"></v-divider>

    <card-row :filters="filters"></card-row>
  </v-container>
</template>

<script>
import CardRow from "@/components/CardRow.vue";

export default {
  components: { CardRow },
  name: "AppProducts",
  data() {
    return {
      allFilters: [
        { header: "Types" },
        { text: "Cakes" },
        { text: "Brownies" },
        { text: "Muffins" },
        { text: "Hampers" },
        { header: "Events" },
        { text: "Birthdays" },
        { text: "Anniversaries" },
        { text: "Baby Showers" },
        { text: "Weddings" },
      ],
      filters: [],
    };
  },
};
</script>

<style lang="sass" scoped></style>
