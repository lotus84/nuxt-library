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
  <label class="mb-6">
    <input
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :name="name"
      :value="inputValue"
      :type="props.type"
      :placeholder="props.placeholder"
      @input="handleChange"
      @blur="handleBlur"
    />
    <span
      v-show="errorMessage"
      class="mt-2 text-sm text-red-600 dark:text-red-500"
    >
      {{ errorMessage }}
    </span>
  </label>
</template>

<style module>
.root {
  position: relative;
  display: flex;
  width: 100%;
}

._error {
  & input {
    border-color: var(--error-color);
  }

  & input:hover,
  & input:focus {
    border-color: var(--error-color);
  }
}

._success {
  & input {
    border-color: var(--success-color);
  }

  & input:hover,
  & input:focus {
    border-color: var(--success-color);
  }
}

.errorMessage {
  position: absolute;
  top: 100%;
  left: 8px;
  font-size: 12px;
  line-height: 14px;
  color: var(--error-color);
}
</style>
