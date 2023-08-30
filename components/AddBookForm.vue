<script setup>
import { useRouter } from "vue-router";
import { Form } from "vee-validate";
import { object, string } from "yup";
import { useCatalogStore } from "~/stores/catalog";
import BaseInput from "~/components/base/BaseInput.vue";
import BaseButton from "~/components/base/BaseButton.vue";

const catalog = useCatalogStore();

const book = {
  key: "",
  title: "",
  cover: "",
  author: {
    name: "",
  },
};

const newBookId = computed(() => {
  return (catalog.books || []).length;
});

const schema = object().shape({
  bookId: string().notRequired(),
  title: string().required("Укажите название"),
  author: string().required("Укажите автора"),
  cover: string().required("Укажите ссылку на обложку"),
  count: string().required("Укажите количество экземпляров"),
});

const router = useRouter();

function onSubmit(event) {
  book.key = event["book-id"] || newBookId;
  book.title = event.title;
  book.cover = event.cover;
  book.author.name = event.author;
  book.count = event.count;

  catalog.addBook(book);

  router.push({ name: "books" });
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
        :placeholder="$t('placeholder.bookID')"
        name="book-id"
        type="text"
      />
    </div>
    <div>
      <BaseInput
        :placeholder="$t('placeholder.bookTitle')"
        name="title"
        type="text"
      />
    </div>
    <div>
      <BaseInput
        :placeholder="$t('placeholder.bookAuthor')"
        name="author"
        type="text"
      />
    </div>
    <div>
      <BaseInput
        :placeholder="$t('placeholder.bookCover')"
        name="cover"
        type="text"
      />
    </div>
    <div>
      <BaseInput
        :placeholder="$t('placeholder.bookCount')"
        name="count"
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
