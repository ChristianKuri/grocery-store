<script>
// imports
import CartWidget from './CartWidget.vue'
export default {
  components: { CartWidget },
}
</script>

<template>
  <header
    class="flex items-center justify-between p-6 mb-10"
    style="background-image: url('/images/double-bubble-outline.png')"
  >
    <h1 class="text-lg font-bold text-gray-700 sm:text-2xl lg:text-4xl">
      The Grocery Store
    </h1>
    <div>
      <CartWidget class="inline-block" />
    </div>
  </header>
</template>
