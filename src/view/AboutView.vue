<template>
  <div>
    <h1 class="text-2xl">About page</h1>
    <div v-if="d">
      <ul>
        <li v-for="e in d" :key="e.id">
          {{ e.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const d = ref(null);

const created = async () => {
  const r = await fetch('https://jsonplaceholder.typicode.com/todos')
  d.value = await r.json();
}

created()
</script>
