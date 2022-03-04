<script setup>
defineProps({
  modelValue: { type: [Number, String], default: 0 },
})

const emit = defineEmits(['update:modelValue', 'input'])
const updateValue = (value) => {
  if (value !== '') {
    emit('update:modelValue', value)
  }
}
</script>
<template>
  <span>
    <button
      class="px-2 bg-gray-200 rounded-l cursor-pointer border border-solid border-gray-500"
      @click="updateValue(modelValue > 0 ? modelValue - 1 : null)"
    >
      -
    </button>
    <input
      :value="modelValue"
      type="number"
      min="0"
      @input="updateValue($event.target.value)"
      class="w-10 text-center border-y border-solid border-gray-500"
    />
    <button
      class="px-2 bg-gray-200 rounded-r cursor-pointer border border-solid border-gray-500"
      @click="updateValue(modelValue + 1)"
    >
      +
    </button>
  </span>
</template>
