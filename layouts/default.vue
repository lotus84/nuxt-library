<script setup>
import TheHeader from "~/components/TheHeader.vue";
</script>

<template>
  <div
    class="flex flex-col justify-start items-stretch min-h-screen w-full bg-white text-primary"
  >
    <TheHeader />
    <slot />
  </div>
</template>
