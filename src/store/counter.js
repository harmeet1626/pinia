import { defineStore } from "pinia";
export const Store = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter,
  },
  actions: {
    increase(){
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
  },
});
