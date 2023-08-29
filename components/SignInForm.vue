<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { Form } from "vee-validate";
import { object, string } from "yup";
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";
import BaseInput from "~/components/base/BaseInput.vue";
import BaseButton from "~/components/base/BaseButton.vue";

const { authenticateUser } = useAuthStore();
const { isUserAuth } = storeToRefs(useAuthStore());

const user = reactive({
  username: "",
  password: "",
});

const schema = object().shape({
  username: string().required("Укажите логин"),
  password: string().required("Укажите пароль"),
});

const router = useRouter();

async function onSubmit(event) {
  user.password = event.password;
  user.username = event.username;

  await authenticateUser(user);
  if (isUserAuth) {
    router.push({ name: "books" });
  }
}

function onInvalidSubmit() {
  const submitBtn = document.querySelector(".submit-button");

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
        :placeholder="$t('placeholder.username')"
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
