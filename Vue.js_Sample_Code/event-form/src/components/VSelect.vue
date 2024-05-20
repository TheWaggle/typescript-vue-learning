<script setup lang="ts" generic="T">
const [modelValue] = defineModel<T>({
  default: null
})

defineProps<{
  options: { value: T; text: string }[]
}>()
</script>

<template>
  <select v-model="modelValue">
    <option value="">選択してください</option>
    <option v-for="option in options" :value="option.value" :key="option.text">
      {{ option.text }}
    </option>
  </select>
</template>

<style scoped>
select {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}
</style>
