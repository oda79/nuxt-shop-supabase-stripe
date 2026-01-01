<template>
  <div ref="menuRef" class="relative" @keydown.esc="isOpen = false">
    <button type="button" class="outline-none focus:outline-none focus:ring-0 hover:bg-transparent focus:bg-transparent flex text-sm border-0" id="user-menu-button" aria-label="Open user menu"
      :aria-expanded="isOpen" @click="isOpen = !isOpen">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m.16 14a6.98 6.98 0 0 0-5.147 2.256A7.97 7.97 0 0 0 12 20a7.97 7.97 0 0 0 5.167-1.892A6.98 6.98 0 0 0 12.16 16M12 4a8 8 0 0 0-6.384 12.821A8.98 8.98 0 0 1 12.16 14a8.97 8.97 0 0 1 6.362 2.634A8 8 0 0 0 12 4m0 1a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4" />
      </svg>
    </button>

    <Transition enter="transition ease-out duration-100" enter-from="transform opacity-0 scale-95"
      enter-to="transform opacity-100 scale-100" leave="transition ease-in duration-75"
      leave-from="transform opacity-100 scale-100" leave-to="transform opacity-0 scale-95">
      <div class="z-50 surface-2 border-base  rounded shadow-lg w-44 absolute right-0 mt-2" v-show="isOpen" id="user-dropdown">
        <div class="px-4 py-3 divider">
          <span class="block font-medium truncate">{{ user?.user_metadata?.full_name }}</span>
          <span class="block text-sm text-gray-500 truncate">{{ user?.user_metadata?.email }}</span>
        </div>
        <ul class="p-2" aria-labelledby="user-menu-button">
          <li>
            <NuxtLink to="/my-account" class="nav-dropdown-link">
              Account</NuxtLink>
          </li>
          <li>
            <NuxtLink as="button" @click="logout" class="nav-dropdown-link">
              Logout</NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuRef = ref<HTMLElement | null>(null);
const isOpen = ref(false);

useClickOutside(menuRef, () => {
  isOpen.value = false;
});

const user = useSupabaseUser();
const { logout } = useLogout();
</script>
