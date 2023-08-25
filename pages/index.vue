<template>
  <div class="p-4">
    <h1 class="text-gray-700 text-base">{{ $t("hello") }}</h1>
    <form>
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="locale-select"
        >{{ $t("language") }}:
      </label>
      <div class="relative">
        <select
          id="locale-select"
          v-model="$i18n.locale"
          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          <option
            v-for="(locale, index) in $i18n.availableLocales"
            :key="index"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
      </div>
    </form>
  </div>
</template>
