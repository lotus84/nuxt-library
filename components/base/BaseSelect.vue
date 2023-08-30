<script setup>
import { computed } from "vue";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const selected = computed({
  get() {
    return props.modelValue;
  },
  set(selected) {
    emit("update:modelValue", selected);
  },
});
</script>

<template>
  <div :class="$style.root">
    <select v-model="selected">
      <option
        v-for="(option, index) in props.options"
        :key="index"
        :value="option.value"
      >
        {{ $t(option.text) }}
      </option>
    </select>
  </div>
</template>

<style module>
.root {
  position: relative;
  width: 100%;

  & select {
    position: relative;
    display: flex;
    width: 100%;
    z-index: 1;
    min-height: 58px;
    padding: 16px 24px;
    font-size: 14px;
    line-height: 16px;
    outline: none;
    cursor: pointer;
    background-color: #ffffff;
    border: 1px solid #4e4d93;
    appearance: none;
    text-indent: 1px;
    text-overflow: "";
    border-radius: 0;
    transition: border-color 0.3s ease;

    &:hover,
    &:focus {
      border-color: #1e193e;
    }
  }

  &::before {
    position: absolute;
    top: 50%;
    right: 20px;
    z-index: 2;
    transform: translateY(-50%);
    display: block;
    content: "";
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 12px solid #1e193e;
  }
}
</style>
