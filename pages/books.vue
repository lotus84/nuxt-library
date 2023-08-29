<script setup>
import { storeToRefs } from "pinia";
import { useCatalogStore } from "~/stores/catalog";
import BooksTable from "~/components/BooksTable.vue";

definePageMeta({
  layout: "inner",
});

const { books, isLoading } = storeToRefs(useCatalogStore());
</script>

<template>
  <div class="flex flex-col grow w-full min-h-full">
    <h2 class="text-3xl mb-4">{{ $t("books") }}</h2>
    <div class="flex mb-4">
      <NuxtLink
        to="/add-book"
        class="inline-flex justify-center items-center py-4 px-8 text-primary bg-lavender text-base transition-colors hover:bg-secondary hover:text-white"
        >{{ $t("addBook") }}</NuxtLink
      >
    </div>
    <BooksTable v-if="!isLoading" :books="books" />
  </div>
</template>
