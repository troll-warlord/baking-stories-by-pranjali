<template>
  <v-lazy style="margin: auto">
    <v-row v-if="getData.length != 0">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="data in getData"
        :key="data.name"
      >
        <card-row-item :data="data"></card-row-item>
      </v-col>
    </v-row>
    <v-row v-else>
      <div class="text-h4">No items found</div>
    </v-row>
  </v-lazy>
</template>

<script>
import { mapGetters } from "vuex";
import CardRowItem from "@/components/CardRowItem.vue";

export default {
  name: "CardRow",

  components: { CardRowItem },

  props: ["filters"],

  data() {
    return {
      itemFilters: ["Cakes", "Brownies", "Muffins", "Hampers"],
      eventFilters: ["Birthdays", "Anniversaries", "Baby Showers", "Weddings"],
    };
  },

  watch: {
    filters() {
      this.$store.state.filters = this.filters;
    },
  },

  computed: {
    ...mapGetters({
      getData: "applyFilters",
    }),
  },
};
</script>
