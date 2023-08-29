<script setup>
import ContentContainer from "~/components/ContentContainer.vue";
import TheLogo from "~/components/TheLogo.vue";
import LanguageToggle from "~/components/LanguageToggle.vue";
</script>

<template>
  <header class="flex w-full bg-white border-b border-melrose border-solid">
    <ContentContainer>
      <div class="flex items-center justify-between w-full">
        <div>
          <TheLogo />
        </div>
        <div>
          <LanguageToggle />
        </div>
      </div>
    </ContentContainer>
  </header>
</template>
