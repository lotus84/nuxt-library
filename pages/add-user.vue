<script setup>
import AddUserForm from "~/components/AddUserForm.vue";

definePageMeta({
  layout: "inner",
});
</script>

<template>
  <div class="flex flex-col grow w-full min-h-full">
    <h2 class="text-3xl mb-4">{{ $t("newUser") }}</h2>
    <AddUserForm />
  </div>
</template>
