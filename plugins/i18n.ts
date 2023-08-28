import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import ru from "../locales/ru.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    locale: "ru",
    fallbackLocale: "ru",
    globalInjection: true,
    detectBrowserLanguage: {
      useCookie: true,
    },
    messages: {
      en,
      ru,
    },
  });

  vueApp.use(i18n);
});
