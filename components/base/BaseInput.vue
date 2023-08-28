<script setup>
import { toRef } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const name = toRef(props, "name");

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
} = useField(name, undefined, {
  initialValue: props.modelValue,
});
</script>

<template>
  <label class="flex w-full relative">
    <input
      class="py-4 px-8 bg-white border border-secondary border-solid rounded-none outline-none text-primary opacity-50 text-base hover:border-tolopea hover:opacity-100 focus:border-tolopea focus:opacity-100 transition-all flex w-full"
      :name="name"
      :value="inputValue"
      :type="props.type"
      :placeholder="props.placeholder"
      @input="handleChange"
      @blur="handleBlur"
    />
    <span
      v-show="errorMessage"
      class="absolute left-0 -bottom-5 text-sm text-jam"
    >
      {{ errorMessage }}
    </span>
  </label>
</template>
