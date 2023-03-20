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
import { Vue, Component, Watch } from "vue-property-decorator";
@Component
export default class ComponentWatch extends Vue {
  public user: { [key: string]: string } = {};
  public userName = "";
  public number = 0;
  //watch
  public error = "";
  public title = "";
  public red = { color: "red", fontSize: "20px" };

  //computed
  get bindName(): string {
    // console.log("computed発動");
    if (this.user.firstName && this.user.lastName) {
      return this.user.lastName + this.user.firstName;
    }
    return "お名前を入力してください";
  }
  //method
  bindNameMethod(): string {
    // console.log("method発動");
    if (this.user.firstName && this.user.lastName) {
      return this.user.lastName + this.user.firstName;
    }
    return "お名前を入力してください";
  }
  //watch
  @Watch("user.firstName")
  bindNameWatch(newValue: string, oldValue: string): void {
    console.log(`watch:${newValue},${oldValue}`);
    this.userName = this.user.lastName + newValue;
  }
  @Watch("user.lastName")
  bindNameWatchL(newValue: string): void {
    this.userName = newValue + this.user.firstName;
  }
  @Watch("title")
  titleWatch(newValue: string): void {
    console.log(newValue);
    this.error = newValue.length > 10 ? "10文字以内でお願いします！" : "";
  }
}
</script>

<style scoped></style>
