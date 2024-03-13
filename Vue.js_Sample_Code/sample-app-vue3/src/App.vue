<template>
  <!-- <MyComponent /> -->
  <div id="root">
    <h1>{{ msg }}</h1>
    <h1>ディレクティブ</h1>
    <Directive></Directive>
    <h2>算出プロパティとウォッチャ</h2>
    <ComputedWatch></ComputedWatch>
    <h2>親子間のデータの受け渡し</h2>
    <DataDelivery
      :nav-item="nav[0]"
      :nav-number="0"
      @change-msg="handleClick($event)"
    ></DataDelivery>
  </div>
</template>

<script lang="ts">
import Directive from './components/Directive.vue'
import ComputedWatch from './components/ComputedWatch.vue'
import DataDelivery from './components/DataDelivery.vue'

export default {
  components: {
    Directive,
    ComputedWatch,
    DataDelivery
  },
  data() {
    return {
      msg: 'Hello',
      nav: ['Works', 'About', 'Contact']
    }
  },
  methods: {
    handleClick($event: string) {
      this.msg = $event
    }
  }
}
</script>

<style>
#root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 960px;
  margin: 0 auto;
}
.step1,
.step2,
.step3,
.step4,
.step5 {
  padding: 2rem;
}
.step1 {
  border: 1px solid #06b463;
}
.step2 {
  border: 1px solid #3b41af;
}
.step3 {
  border: 1px solid #d7598e;
}
.step4 {
  border: 1px solid #a833db;
}
.step5 {
  border: 1px solid #33dbca;
}
</style>
