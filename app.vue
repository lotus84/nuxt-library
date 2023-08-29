<script setup>
import { useCatalogStore } from "~/stores/catalog";

const catalog = useCatalogStore();

const { data: books } = await useAsyncData(async () => {
  await catalog.getBooks();
  return catalog.books;
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
