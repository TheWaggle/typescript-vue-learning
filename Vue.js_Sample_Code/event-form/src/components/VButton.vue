<script setup lang="ts">
defineProps<{
  role?: 'button' | 'submit' | 'reset'
}>()
</script>

<template>
  <button :role="role" class="button" @click="$emit('click')">
    <slot>送信</slot>
  </button>
</template>

<style scoped>
.button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  min-width: 8rem;
}
</style>
