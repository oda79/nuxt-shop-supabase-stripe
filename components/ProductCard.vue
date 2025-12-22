<template>
  <div class="card h-full">
    <div class="card-body">
      <!-- Image -->
      <NuxtLink to="#" class="block">
        <div class="h-56 w-full overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800">
          <img
            class="mx-auto h-full w-full object-contain p-2"
            :src="product.image"
            :alt="product.name"
            loading="lazy"
          />
        </div>
      </NuxtLink>

      <!-- Top row -->
      <div class="mt-6 flex items-center justify-between gap-4">
        <span class="badge badge-sale">Up to 35% off</span>

        <div class="flex items-center gap-1">
          <button type="button" class="icon-btn" aria-label="Quick look">
            <!-- icon -->
            <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
              <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </button>

          <button type="button" class="icon-btn" aria-label="Add to favorites">
            <!-- icon -->
            <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Title (clamped) -->
      <NuxtLink
        to="#"
        class="mt-3 line-clamp-2 text-lg font-semibold leading-tight text-heading hover:underline"
      >
        {{ product.name }}
      </NuxtLink>

      <!-- Meta -->
      <ul class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <li class="flex items-center gap-2">
          <svg class="h-4 w-4 text-gray-500 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
          </svg>
          <p class="meta">Fast Delivery</p>
        </li>

        <li class="flex items-center gap-2">
          <svg class="h-4 w-4 text-gray-500 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
              d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
          <p class="meta">Best Price</p>
        </li>
      </ul>

      <!-- Bottom row pinned -->
      <div class="mt-auto pt-4 flex items-center justify-between gap-4">
        <p class="text-2xl font-extrabold leading-tight text-heading">
          {{ format(product.price) }}
        </p>

        <button
          v-if="isInCart(product.id)"
          type="button"
          @click="navigateTo('/cart')"
          class="btn-primary"
        >
          Go to cart
        </button>

        <button
          v-else
          type="button"
          @click="addToCart(product)"
          class="btn-primary"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/prisma/src/generated/zod'
import { useCart } from '~/composables/useCart'

const props = defineProps<{ product: Product }>()

const { format } = useCurrency()
const { addToCart, isInCart } = useCart()
</script>
