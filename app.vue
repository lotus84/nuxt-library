<script setup>
import { useCatalogStore } from "~/stores/catalog";
import { useUsersStore } from "~/stores/users";

const catalogStore = useCatalogStore();
const usersStore = useUsersStore();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { data: books } = await useAsyncData(async () => {
  await catalogStore.getBooks();
  return catalogStore.books;
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { data: users } = await useAsyncData(async () => {
  await usersStore.getUsers();
  return usersStore.users;
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
