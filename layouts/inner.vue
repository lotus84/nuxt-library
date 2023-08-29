<script setup>
import TheSidebar from "~/components/TheSidebar.vue";
import TheHeader from "~/components/TheHeader.vue";
</script>
<template>
  <div class="flex min-h-screen w-full bg-grey">
    <TheSidebar />
    <div class="flex flex-col grow justify-start items-start min-h-full">
      <TheHeader />
      <div
        class="flex flex-col grow justify-start items-start w-full bg-grey p-5"
      >
        <div
          class="flex flex-col grow justify-start items-start w-full p-6 border border-melrose border-solid rounded bg-white"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
