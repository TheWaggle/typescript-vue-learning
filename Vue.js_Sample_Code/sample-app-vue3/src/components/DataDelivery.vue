<template>
  <div>
    <div class="step1">
      <h2>prop</h2>
      <p>このページは{{ navNumber }}:{{ navItem }}です</p>
      <p>加工しました{{ navItemUpperCase }}</p>
    </div>
    <div class="step2">
      <h2>$emit</h2>
      <button @click="changeMsg">親コンポーネントのメッセージを変えるボタン</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'

export default {
  props: {
    navItem: {
      type: String,
      required: true
    },
    navNumber: {
      type: Number,
      required: true
    }
  },
  setup(props, context) {
    const childMessage = ref('子コンポーネントでセットしたメッセージ')

    //computed
    const navItemUpperCase = computed(() => {
      return props.navItem.toUpperCase()
    })

    //emit
    // 渡したい名前
    const changeMsg = () => {
      context.emit('change-msg', childMessage.value)
    }

    return {
      navItemUpperCase,
      changeMsg
    }
  }
}
</script>
