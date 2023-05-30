<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h1>ディレクティブ</h1>
    <Directive></Directive>
    <h2>算出プロパティとウォッチャ</h2>
    <ComputedWatch></ComputedWatch>
    <h2>フィルター</h2>
    <OriginalFilter></OriginalFilter>
    <!-- <h2>コンポーネント</h2>
    <MyComponent></MyComponent> -->
    <h2>親子間のデータの受け渡し</h2>
    <DataDelivery :nav-item="nav[0]" :nav-number="0" v-on:change-msg="handleClick($event)"></DataDelivery>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Directive from "./components/Directive.vue";
import ComputedWatch from "./components/ComputedWatch.vue";
import OriginalFilter from "./components/OriginalFiltter.vue";
// import MyComponent from "./components/MyComponent.vue";
import DataDelivery from "./components/DataDelivery.vue";

@Component({
  components: {
    Directive,
    ComputedWatch,
    OriginalFilter,
    // MyComponent,
    DataDelivery,
  },
})
export default class App extends Vue {
  msg = "Hello";
  nav = ["Works", "About", "Contact"];
  navNumber = 0;
  // onClick(): void {
  //   window.alert(this.msg);
  // }
  handleClick($event: string): void {
    this.msg = $event;
  }
}
</script>

<style>
#app {
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
