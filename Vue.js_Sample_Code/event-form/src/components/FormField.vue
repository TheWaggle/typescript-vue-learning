<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  errors?: string[]
}>()
const errorMessage = computed(() => (props.errors?.length ? props.errors[0] : ''))
</script>

<template>
  <div class="field">
    <label>{{ label }}</label>
    <slot></slot>
    <p v-show="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

p {
  color: red;
  margin-top: 0.5rem;
}
</style>
