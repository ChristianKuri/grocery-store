<script setup>
defineProps({
  product: { type: Object, required: true },
  count: { type: Number, required: true },
})

defineEmits(['updateCount', 'clear'])
</script>

<template>
  <li class="flex justify-between p-2">
    <span>{{ product.name }}</span>
    <span class="whitespace-nowrap">
      <AppCountInput
        :model-value="count"
        @update:modelValue="$emit('updateCount', $event)"
      />
      <span class="inline-block w-12 text-right"
        >${{ count * product.price }}</span
      >
      <button type="button" class="ml-4" @click="$emit('clear')">
        <fa icon="trash-alt" />
      </button>
    </span>
  </li>
</template>

<style lang="pcss" scoped>
li:nth-of-type(even) {
  @apply bg-gray-300;
}
</style>
