# 単一ファイルコンポーネント

## 単一コンポーネントとは

---

- `Vue`コンポーネントの`HTML`,`CSS`,`JavaScript(Typescript)`を 1 つにまとめることができるファイル形式。(SFC)
- Vue の場合は拡張子が`vue`のファイル
- 実行するためにはビルド環境が必要

## 単一コンポーネントの具体的な書き方

---

3 つのエリアに分けて記載する

```html
<template>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component
  export default class App extends Vue {
    message = "Hello vue.js";
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #082038;
    margin-top: 60px;
  }
</style>
```

<div style="page-break-before:always"></div>

## ワーク

---

`vue-property-decorator`とは何か、`@Component`とは何かなどを調べ、コードの中身を理解しよう

## おまけ

---

### JavaScript の書き方

---

`jsfiddle`などを使い簡易的に実行したい場合。
Typescript を使わない(TypeScript 特有のクラス構文を使わない)場合の書き方は以下

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

<div id="app">
  <p>{{message}}</p>

  <button v-on:click="reverseMessage">メッセージを変更</button>
</div>
```

```javascript
new Vue({
  el: "#app",
  data: {
    message: "Hell!",
  },
  methods: {
    //DOMイベント
    reverseMessage: function () {
      this.message = "メッセージを変更します";
    },
  },
});
```
