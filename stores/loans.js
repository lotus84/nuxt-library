import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useLoansStore = defineStore("loans", () => {
  const loans = reactive([]);

  const isLoading = ref(false);

  async function getLoans() {
    isLoading.value = true;
    const { data } = await useFetch("/api/loans");
    loans.push(...data.value);
    isLoading.value = false;
  }

  function findLoanById(id) {
    return loans.find((loan) => Number(loan.id) === Number(id));
  }

  function addLoan(loan) {
    loans.push(loan);
  }

  function deleteLoanById(id) {
    const indexDeletedLoan = loans.findIndex(
      (loan) => Number(loan.id) === Number(id),
    );
    loans.splice(indexDeletedLoan, 1);
  }

  return {
    loans,
    isLoading,
    getLoans,
    findLoanById,
    addLoan,
    deleteLoanById,
  };
});
