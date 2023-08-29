<script setup>
import { useCatalogStore } from "~/stores/catalog";

const catalog = useCatalogStore();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
