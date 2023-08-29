<script setup>
import AddBookForm from "~/components/AddBookForm.vue";

definePageMeta({
  layout: "inner",
});
</script>

<template>
  <div class="flex flex-col grow w-full min-h-full">
    <h2 class="text-3xl mb-4">{{ $t("newBook") }}</h2>
    <AddBookForm />
  </div>
</template>
