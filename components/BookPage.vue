<script setup>
import { ref } from "vue";
import { useCatalogStore } from "~/stores/catalog";
import ContentContainer from "~/components/ContentContainer.vue";
import { useLoansStore } from "~/stores/loans";
import { BOOK_STATUSES } from "~/constants/book-statuses";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const book = ref();

const catalogStore = useCatalogStore();

book.value = catalogStore.findBookById(Number(props.id));

const loansStore = useLoansStore();

function getBookStatus(id) {
  return loansStore.findLoanByBookId(id)
    ? BOOK_STATUSES.unavailable
    : BOOK_STATUSES.available;
}
</script>

<template>
  <div v-if="book">
    <ContentContainer>
      <div class="w-full flex flex-col justify-start items-start gap-6">
        <div
          v-if="book.key"
          class="w-full flex justify-start items-start gap-6"
        >
          <p
            class="w-1/12 shrink-0 inline-flex justify-end whitespace-nowrap text-right text-base text-pearl"
          >
            {{ $t("id") }}
          </p>
          <p
            class="inline-flex justify-start items-start text-base font-semibold text-primary"
          >
            {{ book.key }}
          </p>
        </div>
        <div
          v-if="book.count"
          class="w-full flex justify-start items-start gap-6"
        >
          <p
            class="w-1/12 shrink-0 inline-flex justify-end whitespace-nowrap text-right text-base text-pearl"
          >
            {{ $t("bookCount") }}
          </p>
          <p
            class="inline-flex justify-start items-start text-base font-semibold text-primary"
          >
            {{ book.count }}
          </p>
        </div>
        <div
          v-if="book.title"
          class="w-full flex justify-start items-start gap-6"
        >
          <p
            class="w-1/12 shrink-0 inline-flex justify-end whitespace-nowrap text-right text-base text-pearl"
          >
            {{ $t("bookTitle") }}
          </p>
          <p
            class="inline-flex justify-start items-start text-base font-semibold text-primary"
          >
            {{ book.title }}
          </p>
        </div>
        <div
          v-if="book.description"
          class="w-full flex justify-start items-start gap-6"
        >
          <p
            class="w-1/12 shrink-0 inline-flex justify-end whitespace-nowrap text-right text-base text-pearl"
          >
            {{ $t("bookDescription") }}
          </p>
          <p
            class="inline-flex justify-start items-start text-base text-primary"
          >
            {{ book.description }}
          </p>
        </div>
        <div
          v-if="book.author.name"
          class="w-full flex justify-start items-start gap-6"
        >
          <p
            class="w-1/12 shrink-0 inline-flex justify-end whitespace-nowrap text-right text-base text-pearl"
          >
            {{ $t("bookAuthor") }}
          </p>
          <p
            class="inline-flex justify-start items-start text-base font-semibold text-primary"
          >
            {{ book.author.name }}
          </p>
        </div>
        <div
          v-if="book.author.bio"
          class="w-full flex justify-start items-start gap-6"
        >
          <p
            class="w-1/12 shrink-0 inline-flex justify-end whitespace-nowrap text-right text-base text-pearl"
          >
            {{ $t("aboutAuthor") }}
          </p>
          <p
            class="inline-flex justify-start items-start text-base text-primary"
          >
            {{ book.author.bio }}
          </p>
        </div>
        <div class="w-full flex justify-start items-start gap-6">
          <p
            class="w-1/12 shrink-0 inline-flex justify-end whitespace-nowrap text-right text-base text-pearl"
          >
            {{ $t("bookStatus") }}
          </p>
          <div
            class="inline-flex justify-start items-start text-base text-primary"
          >
            <span
              v-if="getBookStatus(book.key) === BOOK_STATUSES.available"
              class="inline-flex justify-center items-center py-2 px-4 text-malachite border-malachite border rounded"
            >
              {{ $t(getBookStatus(book.key)) }}
            </span>
            <span
              v-else
              class="inline-flex justify-center items-center py-2 px-4 text-jam border-jam border rounded"
            >
              {{ $t(getBookStatus(book.key)) }}
            </span>
          </div>
        </div>
        <div
          v-if="book.cover"
          class="w-full flex justify-start items-start gap-6"
        >
          <p
            class="w-1/12 shrink-0 inline-flex justify-end whitespace-nowrap text-right text-base text-pearl"
          >
            {{ $t("bookCover") }}
          </p>
          <div
            class="inline-flex justify-start items-start text-base text-primary"
          >
            <img :src="book.cover" alt="" />
          </div>
        </div>
      </div>
    </ContentContainer>
  </div>
</template>
