import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useCatalogStore = defineStore("catalog", () => {
  const books = reactive([]);

  const isLoading = ref(false);

  async function getBooks() {
    isLoading.value = true;
    const { data } = await useFetch("/api/books");
    books.push(...data.value);
    isLoading.value = false;
  }

  function findBookById(id) {
    return books.find((book) => Number(book.key) === Number(id));
  }

  function addBook(book) {
    const bookInCatalog = findBookById(book.key);
    console.log(bookInCatalog)

    if (bookInCatalog) {
      bookInCatalog.count += Number(book.count);
    } else {
      books.push(book);
    }
  }

  return {
    books,
    isLoading,
    getBooks,
    findBookById,
    addBook,
  };
});
