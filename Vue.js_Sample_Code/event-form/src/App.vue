<script setup lang="ts">
import { ref } from 'vue'
import { messages } from './components/messages'
import EntryForm from './components/EntryForm.vue'
import EntryConfirm from './components/EntryConfirm.vue'
import type { EntryData } from './types/EntryData'

const data = ref<EntryData | null>(null)
const confirming = ref(false)
const handleSubmit = (inputData: EntryData) => {
  data.value = inputData
  confirming.value = true
}
const handleBack = () => {
  confirming.value = false
}
</script>

<template>
  <main class="main">
    <h1>{{ messages.formTitle }}</h1>
    <div class="wrapper">
      <EntryForm :entry="data ?? {}" @submit="handleSubmit" v-show="!confirming" />
      <EntryConfirm v-if="confirming && data" :entry="data" @back="handleBack" />
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: 'Yu Gothic', 'YuGothic', '游ゴシック', 'Meiryo', sans-serif;
}

.wrapper {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

h1 {
  margin-bottom: 1rem;
}
</style>
