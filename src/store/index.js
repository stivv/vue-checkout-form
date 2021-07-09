import { createStore } from "vuex";
import { default as cart } from "./cart";

export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increaseCounter: (state) => {
      state.counter++;
    },
    decreaseCounter: (state) => {
      state.counter--;
    },
  },
  actions: {
    increaseCounter: ({ commit }) => {
      commit("increaseCounter");
    },
    decreaseCounter: ({ commit }) => {
      commit("decreaseCounter");
    },
  },
  modules: {
    cart,
  },
});
