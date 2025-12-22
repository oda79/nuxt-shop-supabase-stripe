fr <template>
  <div>


    <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-default">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" class="h-7" alt="Logo">
          <span class="self-center text-xl text-heading font-medium whitespace-nowrap">{{ appConfig.shopName }}</span>
        </NuxtLink>
        <div class="flex md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <div class="flex items-center space-x-2">
            <UserNav v-if="user" />
            <PublicNav v-else />
            <Icon name="uil:shopping-cart" class="h-7 w-7"/>
          </div>
          <button data-collapse-toggle="navbar-sticky" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-sticky" :aria-expanded="isOpen" @click="isOpen = !isOpen">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </button>
        </div>
        <div class="w-full mt-2 md:mt-0 md:flex md:w-auto md:order-1" :class="isOpen ? 'block' : 'hidden'" id="navbar-sticky">
          <ul
            class="text-sm font-semibold flex rounded-lg flex-col p-4 md:p-0 border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <NuxtLink to="/"
                class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-brand md:p-0 md:dark:hover:bg-transparent"
                exact-active-class="text-brand">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about"
                class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-brand md:p-0 md:dark:hover:bg-transparent">
                About</NuxtLink>
            </li>

            <li>
              <NuxtLink to="/contact"
                class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-brand md:p-0 md:dark:hover:bg-transparent">
                Contact</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
  import {ref} from 'vue';

  const isOpen = ref<boolean>(false);

const user = useSupabaseUser();
const appConfig = useAppConfig();



</script>
