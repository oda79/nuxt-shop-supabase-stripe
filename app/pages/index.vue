<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
    <div class="p-2" v-for="product in (products ?? [])">
      <ProductCard :key="product.id" :product="product" />
    </div>

  </div>
</template>

<script lang="ts" setup>
import type { Product } from '@commerce/shared/schemas/zod';



const { data: products } = await useFetch<Product[]>('/api/products')  
</script>
