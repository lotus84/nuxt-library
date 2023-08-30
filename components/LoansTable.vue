<script setup>
import { useLoansStore } from "~/stores/loans";

defineProps({
  loans: {
    type: Array,
    required: true,
  },
});

const loansStore = useLoansStore();

function onDeleteHandler(id) {
  loansStore.deleteLoanById(Number(id));
}
</script>

<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-primary dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase border-b border-lavender bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th class="px-6 py-3">{{ $t("book") }}</th>
          <th class="px-6 py-3">{{ $t("readerName") }}</th>
          <th class="px-6 py-3">{{ $t("readerEmail") }}</th>
          <th class="px-6 py-3">{{ $t("issueData") }}</th>
          <th class="px-6 py-3">{{ $t("dueData") }}</th>
          <th class="px-6 py-3">{{ $t("actions") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="loan in loans"
          :key="loan.id"
          class="bg-white border-b border-lavender dark:bg-gray-800 dark:border-gray-700"
        >
          <td class="px-6 py-4">{{ loan.book }}</td>
          <td class="px-6 py-4">{{ loan.userName }}</td>
          <td class="px-6 py-4">{{ loan.userEmail }}</td>
          <td class="px-6 py-4">{{ loan.issueData }}</td>
          <td class="px-6 py-4">{{ loan.dueData }}</td>
          <td class="px-6 py-4">
            <div class="flex items-center gap-3">
              <NuxtLink
                class="p-1 text-blue transition-colors hover:opacity-75"
                to=""
              >
                {{ $t("view") }}
              </NuxtLink>
              <button
                class="p-1 text-jam transition-colors hover:opacity-75"
                type="button"
                @click="onDeleteHandler(loan.id)"
              >
                {{ $t("delete") }}
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
