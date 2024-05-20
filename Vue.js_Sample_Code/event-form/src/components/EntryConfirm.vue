<script setup lang="ts">
import { computed } from 'vue'
import { type EntryData } from '../types/EntryData'
import { messages } from './messages'

import VButton from './VButton.vue'

const props = defineProps<{
  entry: EntryData
}>()

const emits = defineEmits<{
  back: []
}>()

const handleBack = () => {
  emits('back')
}

const displayParticipation = computed(() => messages.participationKind[props.entry.participation])
</script>

<template>
  <div class="entry-confirm">
    <h2>{{ messages.confirmTitle }}</h2>
    <dl>
      <dt>{{ messages.participation }}</dt>
      <dd>{{ displayParticipation }}</dd>
      <dt>{{ messages.gender }}</dt>
      <dd>{{ entry.gender }}</dd>
      <dt>{{ messages.firstName }}</dt>
      <dd>{{ entry.firstName }}</dd>
      <dt>{{ messages.lastName }}</dt>
      <dd>{{ entry.lastName }}</dd>
      <dt>{{ messages.email }}</dt>
      <dd>{{ entry.email }}</dd>
      <dt>{{ messages.impressions }}</dt>
      <dd>{{ entry.impressions.join(', ') }}</dd>
    </dl>
    <VButton role="button" @click="handleBack">{{ messages.back }}</VButton>
  </div>
</template>

<style scoped>
.entry-confirm {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}

h2 {
  font-weight: bold;
  margin: 0 auto;
  margin-bottom: 1rem;
}

/* <dt> : <dd> のフォーマットで表示したい */
dl {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.5rem;
  dt::after {
    content: ':';
  }

  dt {
    font-weight: bold;
  }
}
</style>
