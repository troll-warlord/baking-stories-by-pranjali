<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="80%">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="deep-purple lighten-2"
          text
          v-bind="attrs"
          v-on="on"
          align-self="right"
          rounded
        >
          Details
        </v-btn>
      </template>

      <v-card class="rounded-xl">
        <v-card-title>{{ data.name }}</v-card-title>

        <v-card-text class="body-1">
          <v-carousel
            class="rounded-xl"
            hide-delimiters
            height="auto"
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(item, i) in data.images"
              :key="i"
              transition="fade-transition"
              :ripple="true"
            >
              <v-img :src="item.src" :aspect-ratio="16 / 9">
                <template v-slot:placeholder>
                  <v-row class="fill-height" align="center" justify="center">
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-carousel-item>
          </v-carousel>

          <v-row class="mt-5">
            <v-col cols="12" md="8">
              <v-chip-group column>
                <v-chip v-for="(tag, index) in data.tags" :key="index" small>
                  {{ tag }}
                </v-chip>
              </v-chip-group>
              {{ data.description }}
            </v-col>

            <v-col cols="12" md="4">
              <v-data-table
                :headers="headers"
                :calculate-widths="true"
                :items="data.pricing"
                hide-default-footer
              ></v-data-table>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" rounded text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "CardRowItemDetails",

  props: ["data"],

  data() {
    return {
      dialog: false,
      headers: [
        { text: "Price (₹)", value: "price", sortable: false },
        { text: "Weight (g)", value: "weight", sortable: false },
      ],
    };
  },
};
</script>
