<script setup>
import { useCatalogStore } from "~/stores/catalog";
import { useUsersStore } from "~/stores/users";
import { useLoansStore } from "~/stores/loans";

const catalogStore = useCatalogStore();
const usersStore = useUsersStore();
const loansStore = useLoansStore();

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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { data: loans } = await useAsyncData(async () => {
  await loansStore.getLoans();
  return loansStore.loans;
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
