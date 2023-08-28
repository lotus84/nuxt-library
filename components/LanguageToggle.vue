<template>
  <div
    class="inline-flex shrink-0 justify-start items-center gap-1 p-1 bg-secondary rounded-[60px]"
  >
    <button
      v-for="(locale, index) in $i18n.availableLocales"
      :key="index"
      :value="locale"
      :class="{
        [$style.button]: true,
        [$style._checked]: $i18n.locale === locale,
      }"
      :disabled="$i18n.locale === locale"
      @click="$i18n.locale = locale"
    >
      {{ locale }}
    </button>
  </div>
</template>

<style module>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  padding: 10px;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 52px;
  transition:
    color 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    background-color: rgba(249, 249, 249, 0.15);
  }

  &._checked {
    color: #2a254b;
    background-color: #ffffff;
  }
}
</style>
