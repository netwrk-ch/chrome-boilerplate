<template>
  <div class="flex flex-col p-4">
    <ul class="flex flex-row p-1 mt-0 rounded-sm border-gray-200 space-x-2 text-md font-medium">
      <li>
        <router-link to="/" class="hover:text-sky-200" aria-current="page">Main</router-link>
      </li>
      <li>
        <router-link to="/about" class="hover:text-sky-200">About</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script setup>

</script>
