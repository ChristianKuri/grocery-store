<script setup>
defineProps({
  active: { type: Boolean, default: false },
})

defineEmits(['close'])
</script>
<template>
  <div v-if="active" class="modal-overlay">
    <div
      class="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-80"
      @click="$emit('close')"
    ></div>
    <div
      class="fixed bg-white p-10 w-4/5 rounded modal-overlay-content max-w-2xl"
    >
      <span class="absolute top-2 right-2" @click="$emit('close')">
        <fa icon="window-close" class="text-gray-700" />
      </span>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay-content {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
