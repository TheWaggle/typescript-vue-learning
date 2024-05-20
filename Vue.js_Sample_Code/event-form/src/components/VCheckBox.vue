<script setup lang="ts" generic="T">
const [modelValue] = defineModel<T[]>()

defineProps<{
  options: { value: T; text: string }[]
}>()

const checked = (value: T) => modelValue.value?.includes(value)

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value as unknown as T
  if (target.checked) {
    modelValue.value = [...(modelValue.value ?? []), value]
  } else {
    modelValue.value = modelValue.value?.filter((v) => v !== value)
  }
}
</script>

<template>
  <div class="checkbox-group">
    <label v-for="option in options" :key="option.text" :class="{ checked: checked(option.value) }">
      <input
        type="checkbox"
        :value="option.value"
        @change="handleChange"
        :checked="checked(option.value)"
      />
      {{ option.text }}
    </label>
  </div>
</template>

<style scoped>
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

input[type='checkbox'] {
  width: 1rem;
  height: 1rem;
}

.checked {
  color: blue;
}
</style>
