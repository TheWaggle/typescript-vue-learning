# リアクティビティの基礎（ref, reactive)

## リアクティビティとは

リアクティビティとは、データの変更を検知して、それに応じてビューを更新する機能のこと。

## リアクティブな状態を宣言する

Composition API では、リアクティブな状態を宣言する方法として、`ref()` 関数の使用が推奨。

```ts
<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    return { count };
  },
};

</script>

<template>
  <button @click="count++">count up</button>
  <p>{{ count }}</p>
</template>
```

`ref()` は、引数を受け取り、それを `.value` プロパティを持つ ref オブジェクトにラップして返す。

```ts
console.log(count); // { value: 0 }
console.log(count.value); // 0

count.value++;
console.log(count.value); // 1
```

テンプレート内で ref を使用する際、`.value` をつける必要はないことに注意。

> なぜ `.value` が必要なのか？
> 通常の JavaScript 変数では、アクセスや変更を検出する方法がないため、setter と getter を使ったリアクティブオブジェクトを作成することで、変数にアクセスがあったり、変更があったタイミングを検知できるようになる。`.value` は、リアクティブオブジェクトのプロパティにアクセスするためのもの。
> 参考: [ref を使う理由](https://ja.vuejs.org/guide/essentials/reactivity-fundamentals.html#why-refs)

## `reactive()`

リアクティブな状態を宣言するもう一つの方法として、`reactive()` 関数がある。

```ts
<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });
    return { state };
  },
};
</script>

<template>
  <button @click="state.count++">count up</button>
  <p>{{ state.count }}</p>
</template>
```

### `reactive()` の制限

1. `ref()` と違い、プリミティブ型の値をラップすることができない。つまり、オブジェクトや配列のみをラップできる。
2. オブジェクト全体を置換できない。

```ts
// これは動作しない
state = reactive({ count: 0 });
state = { count: 1 };
```

3. 分割代入できない。

```ts
// これは動作しない
const { count } = reactive({ count: 0 });
```

以上の制限から、基本的には `ref()` を使用することが推奨される。
