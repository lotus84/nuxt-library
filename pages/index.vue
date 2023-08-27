<script setup>
import TheIntro from "~/components/the-intro/TheIntro.vue";
import BaseInput from "~/components/base/BaseInput.vue";
</script>

<template>
  <div>
    <TheIntro />
    <div>
      <BaseInput
        :placeholder="$t('placeholder.email')"
        name="email"
        type="email"
      />
    </div>
  </div>
</template>
