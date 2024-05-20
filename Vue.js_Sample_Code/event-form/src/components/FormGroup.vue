<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>

<template>
  <div class="form-group">
    <label v-if="label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<style scoped>
.form-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
}
</style>
