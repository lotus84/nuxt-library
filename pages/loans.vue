<script setup>
import { storeToRefs } from "pinia";
import { useLoansStore } from "~/stores/loans";
import LoansTable from "~/components/LoansTable.vue";

definePageMeta({
  layout: "inner",
});

const { loans, isLoading } = storeToRefs(useLoansStore());
</script>

<template>
  <div class="flex flex-col grow w-full min-h-full">
    <h2 class="text-3xl mb-4">{{ $t("loans") }}</h2>
    <div class="flex mb-4">
      <NuxtLink
        to="/add-loan"
        class="inline-flex justify-center items-center py-4 px-8 text-primary bg-lavender text-base transition-colors hover:bg-secondary hover:text-white"
        >{{ $t("addLoan") }}</NuxtLink
      >
    </div>
    <LoansTable v-if="!isLoading" :loans="loans" />
  </div>
</template>
