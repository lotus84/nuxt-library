import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", () => {
  const users = reactive([]);

  const isLoading = ref(false);

  async function getUsers() {
    isLoading.value = true;
    const { data } = await useFetch("/api/users");
    users.push(...data.value);
    isLoading.value = false;
  }

  function findUserById(id) {
    return users.find((user) => Number(user.id) === Number(id));
  }

  function addUser(user) {
    users.push(user);
  }

  function deleteUserById(id) {
    const indexDeletedUser = users.findIndex(
      (user) => Number(user.id) === Number(id),
    );
    users.splice(indexDeletedUser, 1);
  }

  return {
    users,
    isLoading,
    getUsers,
    findUserById,
    addUser,
    deleteUserById,
  };
});
