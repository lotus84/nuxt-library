<script setup>
import TheSidebar from "~/components/TheSidebar.vue";
import TheHeader from "~/components/TheHeader.vue";
</script>
<template>
  <div class="flex min-h-screen w-full bg-grey">
    <TheSidebar />
    <div class="flex flex-col grow justify-start items-start min-h-full">
      <TheHeader />
      <div class="flex flex-col justify-start items-start bg-grey p-5">
        <p>{{ $t("innerLayout") }}</p>
        <slot />
      </div>
    </div>
  </div>
</template>
