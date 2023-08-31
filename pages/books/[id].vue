<script setup>
import { useRoute } from "vue-router";
import BookPage from "~/components/BookPage.vue";

definePageMeta({
  layout: "inner",
});

const { id } = useRoute().params;
</script>

<template>
  <div class="flex flex-col grow w-full min-h-full">
    <h2 class="text-3xl mb-6">{{ $t("viewBook") }}</h2>
    <BookPage :id="id" />
  </div>
</template>
