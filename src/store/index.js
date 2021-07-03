import Vue from "vue";
import Vuex from "vuex";
import CakeData from "@/assets/CakeData.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cakes: CakeData,
    filters: [],
  },
  getters: {
    applyFilters(state) {
      if (state.filters.length == 0) {
        return state.cakes;
      } else {
        return state.cakes.filter((cake) => {
          return state.filters.every((tag) => {
            return cake.tags.includes(tag);
          });
        });
      }
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
