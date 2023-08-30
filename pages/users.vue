<script setup>
import { storeToRefs } from "pinia";
import { useUsersStore } from "~/stores/users";
import UsersTable from "~/components/UsersTable.vue";

definePageMeta({
  layout: "inner",
});

const { users, isLoading } = storeToRefs(useUsersStore());
</script>

<template>
  <div class="flex flex-col grow w-full min-h-full">
    <h2 class="text-3xl mb-4">{{ $t("users") }}</h2>
    <div class="flex mb-4">
      <NuxtLink
        to="/add-user"
        class="inline-flex justify-center items-center py-4 px-8 text-primary bg-lavender text-base transition-colors hover:bg-secondary hover:text-white"
        >{{ $t("addUser") }}</NuxtLink
      >
    </div>
    <UsersTable v-if="!isLoading" :users="users" />
  </div>
</template>
