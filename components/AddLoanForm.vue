<script setup>
import { useRouter } from "vue-router";
import { Form } from "vee-validate";
import { object, string } from "yup";
import { useLoansStore } from "~/stores/loans";
import BaseInput from "~/components/base/BaseInput.vue";
import BaseButton from "~/components/base/BaseButton.vue";

const loansStore = useLoansStore();

const loan = {
  id: "",
  book: "",
  bookKey: "",
  userName: "",
  userId: "",
  userEmail: "",
  issueData: "",
  dueData: "",
};

const newLoanId = computed(() => {
  return (loansStore.loans || []).length;
});

const schema = object().shape({
  book: string().required("Укажите книгу"),
  reader: string().required("Укажите читателя"),
  data: string().required("Укажите дату"),
});

const router = useRouter();

function onSubmit(event) {
  loan.id = newLoanId;
  loan.book = event.book;
  loan.userName = event.reader;
  loan.issueData = event.data;

  loansStore.addLoan(loan);

  router.push({ name: "loans" });
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
        :placeholder="$t('placeholder.loanBook')"
        name="book"
        type="text"
      />
    </div>
    <div>
      <BaseInput
        :placeholder="$t('placeholder.loanReader')"
        name="reader"
        type="text"
      />
    </div>
    <div>
      <BaseInput
        :placeholder="$t('placeholder.loanData')"
        name="data"
        type="text"
      />
    </div>
    <div>
      <BaseButton class="submit-button" type="submit">{{
        $t("save")
      }}</BaseButton>
    </div>
  </Form>
</template>
