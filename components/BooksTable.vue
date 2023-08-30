<script setup>
defineProps({
  books: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-primary dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase border-b border-lavender bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th class="px-6 py-3">{{ $t("bookId") }}</th>
          <th class="px-6 py-3">{{ $t("bookCover") }}</th>
          <th class="px-6 py-3">{{ $t("bookTitle") }}</th>
          <th class="px-6 py-3">{{ $t("bookAuthor") }}</th>
          <th class="px-6 py-3">{{ $t("bookCount") }}</th>
          <th class="px-6 py-3">{{ $t("bookStatus") }}</th>
          <th class="px-6 py-3">{{ $t("bookActions") }}</th>
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
          <td class="px-6 py-4">{{ $t("statusAvailable") }}</td>
          <td class="px-6 py-4">
            <div>
              <NuxtLink to="/">
                {{ $t("view") }}
              </NuxtLink>
              <button type="button">{{ $t("delete") }}</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
