<template>
  <button class="p-2 text-sm text-white bg-gray-700 rounded">
    <slot></slot>
  </button>
</template>
<style scoped>
.primary {
  @apply bg-indigo-600 border-2 border-indigo-600;
}
.secondary {
  @apply bg-gray-500 border-2 border-gray-600;
}
</style>
