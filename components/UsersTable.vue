<script setup>
import { useUsersStore } from "~/stores/users";

defineProps({
  users: {
    type: Array,
    required: true,
  },
});

const usersStore = useUsersStore();

function onDeleteHandler(id) {
  usersStore.deleteUserById(Number(id));
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
          <th class="px-6 py-3">{{ $t("userAvatar") }}</th>
          <th class="px-6 py-3">{{ $t("userName") }}</th>
          <th class="px-6 py-3">{{ $t("userEmail") }}</th>
          <th class="px-6 py-3">{{ $t("userRole") }}</th>
          <th class="px-6 py-3">{{ $t("actions") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
          class="bg-white border-b border-lavender dark:bg-gray-800 dark:border-gray-700"
        >
          <td class="px-6 py-4">{{ user.id }}</td>
          <td class="px-6 py-4">
            <span class="inline-flex w-12">
              <img class="w-20 h-auto rounded-lg" :src="user.image" alt="" />
            </span>
          </td>
          <td class="px-6 py-4">{{ `${user.firstName} ${user.lastName}` }}</td>
          <td class="px-6 py-4">{{ user.email }}</td>
          <td class="px-6 py-4">{{ $t(user.role) }}</td>
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
                @click="onDeleteHandler(user.id)"
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
