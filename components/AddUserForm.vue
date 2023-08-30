<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { Form } from "vee-validate";
import { object, string } from "yup";
import { useUsersStore } from "~/stores/users";
import BaseInput from "~/components/base/BaseInput.vue";
import BaseButton from "~/components/base/BaseButton.vue";

const usersStore = useUsersStore();

const user = reactive({
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  image: "",
  role: "member",
});

const selectOptions = [
  {
    text: "member",
    value: "member",
  },
  {
    text: "librarian",
    value: "librarian",
  },
];

const usersLength = computed(() => {
  return (usersStore.users || []).length;
});

const schema = object().shape({
  email: string().required("Укажите email"),
  name: string().required("Укажите имя"),
  surname: string().required("Укажите фамилию"),
  image: string().required("Укажите ссылку на аватарку"),
});

const router = useRouter();

function onSubmit(event) {
  user.id = usersLength;
  user.email = event.email;
  user.firstName = event.name;
  user.lastName = event.surname;
  user.image = event.image;

  usersStore.addUser(user);

  router.push({ name: "users" });
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
        :placeholder="$t('placeholder.userEmail')"
        name="email"
        type="text"
      />
    </div>
    <div>
      <BaseInput
        :placeholder="$t('placeholder.firstName')"
        name="name"
        type="text"
      />
    </div>
    <div>
      <BaseInput
        :placeholder="$t('placeholder.lastName')"
        name="surname"
        type="text"
      />
    </div>
    <div>
      <BaseInput
        :placeholder="$t('placeholder.image')"
        name="image"
        type="text"
      />
    </div>
    <div>
      <BaseSelect v-model="user.role" :options="selectOptions" />
    </div>
    <div>
      <BaseButton class="submit-button" type="submit">{{
        $t("save")
      }}</BaseButton>
    </div>
  </Form>
</template>
