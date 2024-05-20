<script setup lang="ts">
import { computed, ref } from 'vue'

type InputType = 'string' | 'int' | 'email' | 'password' | 'url' | 'textarea'

const props = withDefaults(
  defineProps<{
    type?: InputType
  }>(),
  {
    type: 'string'
  }
)

const [modelValue] = defineModel<string>({
  default: ''
})

const [intValue] = defineModel<number, 'int'>('int', {
  default: 0
})

const inputValue = ref<string>('')

inputValue.value = props.type === 'int' ? intValue.value.toString() : modelValue.value

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (props.type === 'int') {
    const int = parseInt(target.value, 10)
    inputValue.value = isNaN(int) ? '' : int.toString()
    intValue.value = isNaN(int) ? 0 : int
    return
  }

  inputValue.value = target.value.trim()
  modelValue.value = inputValue.value
}

const inputTypes: Record<string, string> = {
  string: 'text',
  int: 'number'
}

const inputType = computed(() => inputTypes[props.type] ?? props.type)
</script>

<template>
  <textarea v-if="inputType === 'textarea'" :value="inputValue" @input="handleChange" />
  <input v-else :type="inputType" :value="inputValue" @input="handleChange" />
</template>

<style scoped>
textarea,
input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  box-sizing: border-box;
}

textarea {
  height: 5rem;
  resize: vertical;
}
</style>
