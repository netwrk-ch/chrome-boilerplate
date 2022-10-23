<template>
  <div>
    <h1 class="text-2xl">About page</h1>
    <div>
      {{ d }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const d = ref(null);

const created = async () => {
  const r = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  d.value = await r.json();
}

created()
</script>
