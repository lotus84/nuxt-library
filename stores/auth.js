import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const isUserAuth = ref(false);
  const user = ref({});

  async function authenticateUser({ username, password }) {
    const { data } = await useFetch("https://dummyjson.com/auth/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: {
        username,
        password,
      },
    });

    if (data.value) {
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      token.value = data?.value?.token; // set token to cookie
      user.value = data?.value;
      isUserAuth.value = true; // set authenticated  state value to true
    }
  }

  function logOutUser() {
    const token = useCookie("token"); // useCookie new hook in nuxt 3
    isUserAuth.value = false; // set authenticated  state value to false
    token.value = null; // clear the token cookie
    user.value = {};
  }

  return {
    isUserAuth,
    user,
    authenticateUser,
    logOutUser,
  };
});
