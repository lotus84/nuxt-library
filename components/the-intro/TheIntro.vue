<script setup>
import ContentContainer from "~/components/ContentContainer.vue";
import SignInForm from "~/components/SignInForm.vue";
</script>

<template>
  <div class="relative flex grow w-full min-h-full">
    <div
      class="absolute top-0 left-0 flex justify-center items-center w-full h-full"
    >
      <img
        class="object-cover object-left-top w-full h-full"
        src="./bg-intro@2x.png"
        width="1440"
        height="704"
        alt=""
      />
    </div>
    <div class="relative flex w-full py-28 px-20">
      <ContentContainer>
        <div
          class="flex self-end w-2/4 max-w-xl p-12 bg-white flex-col gap-8 justify-start items-stretch"
        >
          <p class="text-3xl">{{ $t("signIn") }}</p>
          <SignInForm />
        </div>
      </ContentContainer>
    </div>
  </div>
</template>
