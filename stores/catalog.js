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

    if (bookInCatalog) {
      bookInCatalog.count += Number(book.count);
    } else {
      books.push(book);
    }
  }

  function deleteBookFromCatalogById(id) {
    const indexDeletedBook = books.findIndex(
      (book) => Number(book.key) === Number(id),
    );
    books.splice(indexDeletedBook, 1);
  }

  return {
    books,
    isLoading,
    getBooks,
    findBookById,
    addBook,
    deleteBookFromCatalogById,
  };
});
