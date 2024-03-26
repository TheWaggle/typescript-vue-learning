# Vue.js とは

## Vue.js とは

---

- 進歩的な JavaScript のフレームワーク
- シンプルでより軽量化されている
- 開発者は Angular.js を開発した Evan You さん

### 用語の整理

- ライブラリとは
  - 使用頻度の高いある特定の機能(プログラム)を部品化したファイル
  - 部品化されているプログラムを利用することで 1 から機能を作らなくてよい
- フレームワークとは
  - ライブラリと同じ機能に加え、アプリケーションの設計も行える
  - 自分で設計する必要はなく、定められた決まりに沿って書くことで、メンテナンスしやすいアプリケーションになる

> 参考：[他のフレームワークとの比較](https://v2.vuejs.org/v2/guide/comparison.html)

## Vue.js の特性

---

### データバインドに特化している

---

データを更新すると UI(ユーザーインターフェイス)が更新され、UI を変更するとデータが更新される。
具体的には、画面描画されるとデータを変更し、データが変更されると画面が再描画される。(リアクティブなデータ)

### 柔軟性が高い

---

段階的に採用できるため、大規模開発でも小規模開発でも取り入れやすい。
TypeScript を使用せず JavaScript で開発もできるため、開発規模によって取捨選択できる。

### 仮想 DOM の採用

---

変更前の仮想 DOM と変更後の仮想 DOM の差分のみ DOM に伝え、レンダリング(描画)することで、パフォーマンスが良い。

<div style="page-break-before:always"></div>

## ワーク 1

---

理解があいまいな用語をしらべてまとめよう。

> 特に仮想 DOM の理解が Vue の特性をとらえるポイントとなる

## 2 つの API スタイル

Vue コンポーネントを作成する際は、Options API、そして Composition API と呼ばれる 2 種類の異なる API スタイルが利用できる。

### Options API

Options API では、data、methods、mounted といった数々のオプションからなる 1 つのオブジェクトを用いてコンポーネントのロジックを定義する。それぞれのプロパティには、 コンポーネントインスタンス `this` を用いてアクセスできる。

```ts
<script>
export default {
  // data() で返すプロパティはリアクティブな状態になり、
  // `this` 経由でアクセスすることができます。
  data() {
    return {
      count: 0
    }
  },

  // メソッドの中身は、状態を変化させ、更新をトリガーさせる関数です。
  // 各メソッドは、テンプレート内のイベントハンドラーにバインドすることができます。
  methods: {
    increment() {
      this.count++
    }
  },
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

### Composition API

Composition API は、Vue 3 で導入された新しい API スタイルで、コンポーネントのロジックをより小さな関数に分割し、再利用可能なコードを作成することができる。Composition API では、インポートした各種 API 関数を使ってコンポーネントのロジックを定義していく。

```ts
<script>
import { ref } from 'vue'

export default {
  setup() {
    // ref() 関数を使ってリアクティブな状態を宣言
    const count = ref(0)

    // インクリメント関数を定義
    const increment = () => {
      count.value++
    }

    // インクリメント関数を返す
    return {
      count,
      increment
    }
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

`setup()` フックは、コンポーネントの初期化時に呼び出される関数で、コンポーネントのロジックを定義するために使用される特別な関数。
