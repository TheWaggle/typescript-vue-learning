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
  export default {
    setup() {
      const message = "Hello vue.js";
      return { message };
    },
  };
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

`setup` 関数が何をしているのか調べて、コードの意味を理解しよう。
