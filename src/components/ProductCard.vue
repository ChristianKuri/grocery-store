<script setup>
// imports
import { ref } from 'vue'
import AppCountInput from './AppCountInput.vue'

defineProps({
  product: Object,
})

// emits
defineEmits(['addToCart'])

// data
const count = ref(0)
</script>

<template>
  <li
    class="flex flex-col flex-grow p-4 text-lg font-bold text-center text-gray-700 bg-white rounded-lg shadow"
  >
    <div class="flex items-center justify-center flex-1 mb-3">
      <img :src="`/images/${product.image}`" />
    </div>
    <div>
      {{ product.name }} -
      <span class="text-indigo-700">${{ product.price }}</span>
      <div class="m-4 text-center">
        <AppCountInput v-model="count" />
      </div>
      <button
        type="button"
        class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="$emit('addToCart', count), (count = 0)"
      >
        <svg
          class="-ml-0.5 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Add to cart
      </button>
    </div>
  </li>
</template>
