<template>
  <div>
    <div class="step1">
      <h3>ref</h3>
      <button @click="count++">count up</button>
      <p>{{ count }}</p>
    </div>
    <div class="step2">
      <h3>reactive</h3>
      <button @click="state.count++">count up</button>
      <p>{{ state.count }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, reactive } from 'vue'

export default {
  setup() {
    // ref
    const count = ref(0)

    // reactive
    const state = reactive({
      count: 0
    })

    return {
      count,
      state
    }
  }
}
</script>
