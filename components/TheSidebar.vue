<script setup>
import { ref } from "vue";

const links = ref([
  {
    // text: "Настройки",
    text: "settings",
    href: "settings",
  },
  {
    text: "users",
    href: "users",
  },
  {
    text: "loans",
    href: "loans",
  },
  {
    text: "books",
    href: "books",
  },
]);
</script>

<template>
  <div
    class="flex flex-col items-start justify-start w-52 shrink-0 min-h-full pb-8 bg-white border-r border-melrose border-solid"
  >
    <div
      class="inline-flex w-full justify-center items-center py-4 font-semibold text-2xl tracking-wide uppercase"
    >
      <p>{{ $t("menu") }}</p>
    </div>
    <ul class="flex flex-col w-full">
      <li v-for="(link, index) in links" :key="index" class="">
        <NuxtLink
          class="link"
          :to="{ name: link.href }"
          active-class="sidebar-link-active"
        >
          {{ $t(link.text) }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style>
.link {
  position: relative;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #2a254b;
  background-color: #ffffff;
  transition:
    color 0.3s ease,
    background-color 0.3s ease;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    width: 4px;
    height: 100%;
    background-color: #4e4d93;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background-color: #cac6da;
  }

  &.sidebar-link-active {
    color: #ffffff;
    background-color: #7171a9;
    cursor: default;

    &::before {
      opacity: 1;
    }
  }
}
</style>
