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
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class DataDelivery extends Vue {
  @Prop() navItem!: string;
  @Prop() navNumber!: number;
  childMessage = "子コンポーネントでセットしたメッセージ";

  //computed
  get navItemUpperCase() {
    return this.navItem.toUpperCase();
  }
  //emit
  //@Emit('渡したい名前')
  @Emit("change-msg")
  changeMsg(): string {
    return this.childMessage;
  }
}
</script>
