<template>
  <header>
    <nav class="nav-shell surface divider">
      <div class="nav-inner">
        <NuxtLink to="/" class="flex items-center gap-3">
          <img src="/logo.png" class="h-7 w-auto" alt="Logo" />
          <span class="text-xl font-medium text-heading [@media(max-width:360px)]:sr-only">
            {{ appConfig.shopName }}
          </span>
        </NuxtLink>

        <div class="flex items-center gap-2 md:order-2">
          <DarkModeSwitcher />
          <UserNav v-if="user"/>
          <PublicNav v-else/>

          <NuxtLink to="/cart" class="icon-btn outline-none focus:outline-none focus:ring-0 hover:bg-transparent focus:bg-transparent" aria-label="Cart" @click="closeMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 56 56"><path fill="currentColor" d="M20.008 39.649H47.36c.913 0 1.71-.75 1.71-1.758s-.797-1.758-1.71-1.758H20.406c-1.336 0-2.156-.938-2.367-2.367l-.375-2.461h29.742c3.422 0 5.18-2.11 5.672-5.461l1.875-12.399a7 7 0 0 0 .094-.89c0-1.125-.844-1.899-2.133-1.899H14.641l-.446-2.976c-.234-1.805-.89-2.72-3.28-2.72H2.687c-.937 0-1.734.822-1.734 1.76c0 .96.797 1.781 1.735 1.781h7.921l3.75 25.734c.493 3.328 2.25 5.414 5.649 5.414m31.054-25.454L49.4 25.422c-.188 1.453-.961 2.344-2.344 2.344l-29.906.023l-1.993-13.594ZM21.86 51.04a3.766 3.766 0 0 0 3.797-3.797a3.78 3.78 0 0 0-3.797-3.797c-2.132 0-3.82 1.688-3.82 3.797c0 2.133 1.688 3.797 3.82 3.797m21.914 0c2.133 0 3.82-1.664 3.82-3.797c0-2.11-1.687-3.797-3.82-3.797c-2.109 0-3.82 1.688-3.82 3.797c0 2.133 1.711 3.797 3.82 3.797"/></svg>
          </NuxtLink>

          <button
            type="button"
            class="nav-toggle outline-none focus:outline-none focus:ring-0 hover:bg-transparent focus:bg-transparent"
            aria-controls="navbar-sticky"
            :aria-expanded="isOpen"
            @click="isOpen = !isOpen"
            aria-label="Toggle navigation"
          >            
            <svg class="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </button>
        </div>

        <div id="navbar-sticky" class="nav-menu max-md:surface-2" :class="isOpen ? 'block' : 'hidden md:block'">
          <ul class="nav-list">
            <li>
              <NuxtLink to="/" class="nav-link" exact-active-class="nav-link-active" @click="closeMenu">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="nav-link" active-class="nav-link-active" @click="closeMenu">
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="nav-link" active-class="nav-link-active" @click="closeMenu">
                Contact
              </NuxtLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const user = useSupabaseUser()
const appConfig = useAppConfig()

function closeMenu() {
  isOpen.value = false
}
</script>
