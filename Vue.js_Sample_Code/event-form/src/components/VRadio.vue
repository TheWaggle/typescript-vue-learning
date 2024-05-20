<script setup lang="ts">
defineProps<{
  options: { value: string; text: string }[]
}>()
const [modelValue] = defineModel<string>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  modelValue.value = target.value
}
</script>

<template>
  <div class="radio-group">
    <label
      v-for="option in options"
      :key="option.value"
      :class="{ checked: modelValue === option.value }"
    >
      <input
        type="radio"
        :value="option.value"
        @change="handleChange"
        :checked="modelValue === option.value"
      />
      {{ option.text }}
    </label>
  </div>
</template>

<style scoped>
.radio-group {
  display: flex;
  gap: 0.5rem;
}

label {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

input[type='radio'] {
  width: 1rem;
  height: 1rem;
}

.checked {
  color: blue;
}
</style>
