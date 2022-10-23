import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useBaseStore = defineStore("base", {
  state: () => {
    return { data: useStorage(null) };
  },
});

