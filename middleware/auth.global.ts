import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to) => {
  const { isUserAuth } = storeToRefs(useAuthStore());
  const token = useCookie("token");

  if (token.value) {
    isUserAuth.value = true;
  }

  if (!isUserAuth.value && to.path !== "/") {
    abortNavigation();
    return navigateTo("/");
  }
});
