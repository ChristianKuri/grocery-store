<script setup>
import TheHeader from '@/components/TheHeader.vue'
import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/stores/ProductStore'
import { useCartStore } from '@/stores/CartStore'

const productStore = useProductStore()
const cartStore = useCartStore()

productStore.fill()
</script>

<template>
  <div class="w-full mx-auto max-w-7xl">
    <TheHeader />
    <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        @addToCart="cartStore.addItems($event, product)"
      />
    </ul>
  </div>
</template>
