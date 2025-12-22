<template>
  <div class="relative">
    <button
      type="button"
      class="flex text-sm bg-white rounded-full md:me-0 focus:ring-4 focus:ring-neutral-tertiary"
      id="user-menu-button"
      :aria-expanded="isOpen"
      @click="isOpen = !isOpen"
    >
      <span class="sr-only">Open user menu</span>
      <Icon name="uil:user-circle" class="h-7 w-7" />
    </button>

    <div
      class="z-50 bg-white border border-default-medium rounded shadow-lg w-44 absolute right-0 mt-2"
      :class="isOpen ? 'block' : 'hidden'"
      id="user-dropdown"
    >
      <div class="px-4 py-3 text-sm border-b border-default">
        <span class="block text-heading font-medium">Joseph McFall</span>
        <span class="block text-body truncate">name@flowbite.com</span>
      </div>

      <ul class="p-2 text-sm font-medium" aria-labelledby="user-menu-button">
        <li><a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a></li>
        <li><a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a></li>
        <li><a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a></li>
        <li><a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isOpen = ref(false);
</script>
