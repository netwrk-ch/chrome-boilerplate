<template>
  <div>
    <h1 class="text-2xl">Main</h1>
    <div>
      {{ base.data }}
      <br />
      <input v-model="base.data">
    </div>
  </div>
</template>

<script setup>
import { useBaseStore } from "@/stores/base";

const base = useBaseStore();

</script>
