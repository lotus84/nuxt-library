<script setup>
import AddLoanForm from "~/components/AddLoanForm.vue";

definePageMeta({
  layout: "inner",
});
</script>

<template>
  <div class="flex flex-col grow w-full min-h-full">
    <h2 class="text-3xl mb-4">{{ $t("newLoan") }}</h2>
    <AddLoanForm />
  </div>
</template>
