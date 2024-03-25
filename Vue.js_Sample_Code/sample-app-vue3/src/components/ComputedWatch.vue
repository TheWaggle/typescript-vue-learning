<template>
  <div>
    <div class="step1">
      <h2>computedとmethodとwatch</h2>
      <label for="lastName">氏</label>
      <input type="text" if="lastName" v-model="user.lastName" />
      <label for="firstName">名</label>
      <input type="text" if="firstName" v-model="user.firstName" />
      <p>computedを使用：{{ bindName }}</p>
      <p>methodを使用：{{ bindNameMethod() }}</p>
      <p>watchを使用：{{ userName }}<span v-if="!userName">お名前を入力してください</span></p>

      <button @click="number++">+</button>
      <p>カウントアップ{{ number }}</p>
    </div>
    <div class="step2">
      <h2>watchでエラー処理</h2>
      <label for="title">タイトル入力</label>
      <input type="title" id="title" v-model="title" />
      <p>{{ title }}</p>
      <p v-if="error" :style="red">{{ error }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, watch } from 'vue'

const red = { color: 'red', fontSize: '20px' }

export default {
  setup() {
    // data
    const user = ref({ lastName: '', firstName: '' })
    const userName = ref('')
    const number = ref(0)
    const title = ref('')
    const error = ref('')

    // computed
    const bindName = computed(() => {
      if (user.value.firstName && user.value.lastName) {
        return user.value.lastName + user.value.firstName
      }
      return 'お名前を入力してください'
    })

    // method
    const bindNameMethod = () => {
      if (user.value.firstName && user.value.lastName) {
        return user.value.lastName + user.value.firstName
      }
      return 'お名前を入力してください'
    }

    // watch
    watch(
      () => user.value.firstName,
      (newValue, oldValue) => {
        console.log(`watch:${newValue},${oldValue}`)
        userName.value = user.value.lastName + newValue
      }
    )
    watch(
      () => user.value.lastName,
      (newValue) => {
        userName.value = newValue + user.value.firstName
      }
    )
    watch(
      () => title.value,
      (newValue) => {
        console.log(newValue)
        error.value = newValue.length > 10 ? '10文字以内でお願いします！' : ''
      }
    )

    return {
      user,
      userName,
      number,
      title,
      error,
      red,
      bindName,
      bindNameMethod
    }
  }
}
</script>

<style scoped></style>
