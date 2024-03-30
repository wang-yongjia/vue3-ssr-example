import { defineStore } from "pinia";
import axios from "axios";

export const useHomeStore = defineStore("home", {
  state() {
    return {
      count: 100,
      homeData: {},
    };
  },
  actions: {
    increment(payload) {
      console.log("payload=>", payload);
      this.count += 1;
    },
    decrement() {
      this.count--;
    },
    async fetchHomeData() {
      const res = await axios.get(
        "http://codercba.com:9060/juanpi/api/homeInfo"
      );
      this.homeData = res.data.data;
    },
  },
});
