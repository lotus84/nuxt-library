<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useAuthStore } from "~/stores/auth";
import ContentContainer from "~/components/ContentContainer.vue";
import TheLogo from "~/components/TheLogo.vue";
import LanguageToggle from "~/components/LanguageToggle.vue";
import IconMenu from "~/components/base/icons/IconMenu.vue";
import IconDefaultUser from "~/components/base/icons/IconDefaultUser.vue";

const { isUserAuth, user } = storeToRefs(useAuthStore());
const authStore = useAuthStore();

const isUserMenuVisible = ref(false);

const router = useRouter();

function onSignOutClick() {
  authStore.logOutUser();
  router.push({ path: "/" });
}

const emit = defineEmits(['toggle-sidebar']);

function onMenuClick() {
  emit('toggle-sidebar');
}
</script>

<template>
  <header
    class="flex w-full min-h-[72px] bg-white border-b border-melrose border-solid"
  >
    <ContentContainer>
      <div class="flex self-center items-center justify-between w-full h-full">
        <div>
          <TheLogo v-if="!isUserAuth" />
          <button
            v-else
            class="inline-flex shrink-0 justify-center items-center px-5 py-5 transition-all text-5xl hover:opacity-50"
            type="button"
            @click="onMenuClick"
          >
            <IconMenu />
          </button>
        </div>
        <div class="flex items-center justify-end gap-7">
          <LanguageToggle />
          <div v-if="isUserAuth" class="relative">
            <button
              class="inline-flex shrink-0 justify-center items-center gap-3 p-2.5 text-lg rounded-xl bg-white transition-all hover:bg-melrose"
              type="button"
              @click="isUserMenuVisible = !isUserMenuVisible"
            >
              <span
                class="inline-flex shrink-0 justify-center items-center w-10 rounded-full bg-white border-2 border-melrose"
              >
                <img
                  v-if="user.image"
                  class="w-10 h-auto rounded-full"
                  :src="user.image"
                  alt=""
                />
                <IconDefaultUser v-else class="w-10 h-auto rounded-full" />
              </span>
              {{ user.firstName ? user.firstName : $t("user") }}
            </button>
            <div
              v-if="isUserMenuVisible"
              class="absolute -bottom-14 left-0 flex flex-col justify-start shadow-sm rounded w-full p-3 bg-white border-melrose"
            >
              <button type="button" @click="onSignOutClick">
                {{ $t("signOut") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  </header>
</template>
