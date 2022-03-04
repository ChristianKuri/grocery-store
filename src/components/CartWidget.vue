<script setup>
// imports
import { ref } from 'vue'
import CartItem from './CartItem.vue'
import { useCartStore } from '@/stores/CartStore'
const cartStore = useCartStore()

// data
const active = ref(false)
</script>

<template>
  <div class="relative">
    <!-- Icon that always shows -->
    <span class="cursor-pointer" @click="active = true">
      <fa icon="shopping-cart" size="lg" class="text-gray-700" />
      <div class="absolute cart-count">{{ cartStore.count }}</div>
    </span>
    <!-- Modal Overlay only shows when cart is clicked on -->
    <AppModalOverlay :active="active" @close="active = false">
      <div v-if="!cartStore.isEmpty">
        <ul class="mb-5">
          <CartItem
            v-for="(items, name) in cartStore.grouped"
            :key="name"
            :product="items[0]"
            :count="cartStore.groupCount(name)"
            @updateCount="cartStore.setItemCount(items[0], $event)"
            @clear="cartStore.clearItem(name)"
          />
        </ul>
        <div class="flex justify-end mb-5 text-2xl">
          Total: <strong>${{ cartStore.total }}</strong>
        </div>
        <div class="flex justify-end">
          <AppButton class="mr-2 secondary" @click="cartStore.clear()"
            >Clear Cart</AppButton
          >
          <AppButton class="primary" @click="cartStore.checkout"
            >Checkout</AppButton
          >
        </div>
      </div>
      <!-- Uncomment and use condition to show when cart is empty -->
      <div v-else><em>Cart is Empty</em></div>
    </AppModalOverlay>
  </div>
</template>
