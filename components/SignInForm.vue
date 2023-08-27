<script setup>
import { useRouter } from "vue-router";
import { Form } from "vee-validate";
import { object, string } from "yup";
// import { useAuthStore } from "../stores/auth";
import BaseInput from "~/components/base/BaseInput.vue";
import BaseButton from "~/components/base/BaseButton.vue";

// const authStore = useAuthStore();

const schema = object().shape({
  username: string().required("заполните поле"),
  password: string().required("введите пароль"),
});

const router = useRouter();

function onSubmit(event) {
  // authStore.setAuthToken(event.username);
  router.push({ name: "add-item" });
}

function onInvalidSubmit() {
  const submitBtn = document.querySelector(".submit-button");

  // authStore.clearAuthToken();

  submitBtn.classList.add("invalid");
  setTimeout(() => {
    submitBtn.classList.remove("invalid");
  }, 1000);
}
</script>

<template>
  <Form
    class="flex flex-col justify-start items-stretch gap-8"
    :validation-schema="schema"
    @submit="onSubmit"
    @invalid-submit="onInvalidSubmit"
  >
    <div>
      <BaseInput
        :placeholder="$t('placeholder.email')"
        name="username"
        type="text"
      />
    </div>
    <div>
      <BaseInput
        :placeholder="$t('placeholder.password')"
        name="password"
        type="password"
      />
    </div>
    <div>
      <BaseButton class="submit-button" type="submit">{{
        $t("signIn")
      }}</BaseButton>
    </div>
  </Form>
</template>
