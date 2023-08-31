<script setup>
import { useCatalogStore } from "~/stores/catalog";
import { useLoansStore } from "~/stores/loans";
import { BOOK_STATUSES } from "~/constants/book-statuses";

defineProps({
  books: {
    type: Array,
    required: true,
  },
});

const catalogStore = useCatalogStore();

function onDeleteHandler(id) {
  catalogStore.deleteBookFromCatalogById(Number(id));
}

const loansStore = useLoansStore();

function getBookStatus(id) {
  return loansStore.findLoanByBookId(id)
    ? BOOK_STATUSES.unavailable
    : BOOK_STATUSES.available;
}
</script>

<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-primary dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase border-b border-lavender bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th class="px-6 py-3">{{ $t("id") }}</th>
          <th class="px-6 py-3">{{ $t("bookCover") }}</th>
          <th class="px-6 py-3">{{ $t("bookTitle") }}</th>
          <th class="px-6 py-3">{{ $t("bookAuthor") }}</th>
          <th class="px-6 py-3">{{ $t("bookCount") }}</th>
          <th class="px-6 py-3">{{ $t("bookStatus") }}</th>
          <th class="px-6 py-3">{{ $t("actions") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="book in books"
          :key="book.key"
          class="bg-white border-b border-lavender dark:bg-gray-800 dark:border-gray-700"
        >
          <td class="px-6 py-4">{{ book.key }}</td>
          <td class="px-6 py-4">
            <span class="inline-flex w-12">
              <img class="w-12 h-auto" :src="book.cover" alt="" />
            </span>
          </td>
          <td class="px-6 py-4">{{ book.title }}</td>
          <td class="px-6 py-4">{{ book.author.name }}</td>
          <td class="px-6 py-4">{{ book.count }}</td>
          <td class="px-6 py-4">
            <span
              v-if="getBookStatus(book.key) === BOOK_STATUSES.available"
              class="inline-flex justify-center items-center py-2 px-4 text-malachite border-malachite border rounded"
            >
              {{ $t(getBookStatus(book.key)) }}
            </span>
            <span
              v-else
              class="inline-flex justify-center items-center py-2 px-4 text-jam border-jam border rounded"
            >
              {{ $t(getBookStatus(book.key)) }}
            </span>
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center gap-3">
              <NuxtLink
                class="p-1 text-blue transition-colors hover:opacity-75"
                :to="`/books/${book.key}`"
              >
                {{ $t("view") }}
              </NuxtLink>
              <button
                class="p-1 text-jam transition-colors hover:opacity-75"
                type="button"
                @click="onDeleteHandler(book.key)"
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
