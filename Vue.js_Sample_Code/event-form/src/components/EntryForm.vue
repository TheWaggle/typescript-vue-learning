<script setup lang="ts">
import { ref } from 'vue'
import { defaultEntryData, type EntryData } from '../types/EntryData'
import { participationKinds } from '../types/ParticipationKind'
import { genders } from '../types/Gender'

import { messages } from './messages'
import FormField from './FormField.vue'
import FormGroup from './FormGroup.vue'
import VInput from './VInput.vue'
import VRadio from './VRadio.vue'
import VSelect from './VSelect.vue'
import VButton from './VButton.vue'
import VCheckBox from './VCheckBox.vue'

const props = defineProps<{
  entry: Partial<EntryData>
}>()

const participationOptions = participationKinds.map((kind) => ({
  value: kind,
  text: messages.participationKind[kind]
}))

const impressionOptions = ['Twitter', 'Facebook', 'Instagram', '知人からの紹介', 'その他'].map(
  (v) => ({
    value: v,
    text: v
  })
)

const data = ref<EntryData>({
  ...defaultEntryData,
  ...props.entry
})
const emits = defineEmits<{
  submit: [value: EntryData]
}>()

const handleSubmit = () => {
  emits('submit', {
    ...defaultEntryData,
    ...data.value
  })
}
</script>

<template>
  <form class="entry-form" @submit.prevent="handleSubmit">
    <FormField :label="messages.participation">
      <VSelect v-model="data.participation" :options="participationOptions" />
    </FormField>

    <FormField label="">
      <VRadio v-model="data.gender" :options="genders.map((g) => ({ text: g, value: g }))" />
    </FormField>

    <FormGroup>
      <FormField :label="messages.firstName">
        <VInput v-model="data.firstName" />
      </FormField>
      <FormField :label="messages.lastName">
        <VInput v-model="data.lastName" />
      </FormField>
    </FormGroup>

    <FormField :label="messages.email">
      <VInput v-model="data.email" type="email" />
    </FormField>

    <FormField :label="messages.question">
      <VInput v-model="data.question" type="textarea" />
    </FormField>

    <VCheckBox
      v-model="data.impressions"
      :label="messages.impressions"
      :options="impressionOptions"
    />
    <VButton>{{ messages.entry }}</VButton>
  </form>
</template>

<style scoped>
.entry-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
}
</style>
