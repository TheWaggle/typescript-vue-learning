# SFC の便利なスタイル

## script setup

Vue 3.2 からは、`<script setup>` という新しいスタイルが導入された。これは、Vue 3 の Composition API を使ったコードをより簡潔に書くための機能である。

`<script setup>` を使うと、`<script>` タグ内で `setup` 関数を定義する必要がなくなる。また、`<script>` タグ内で `defineProps` や `defineEmits` などのヘルパー関数(コンパイラマクロ)を使かって、プロパティやイベントを定義することもできる。

以下は、`<script setup>` を使った例である。

```ts
<template>
  <div>
    <p>Props: {{ props.msg }}</p>
    <button @click="increment">Count is: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  msg: String
})

const count = ref(0)

const increment = () => {
  count.value++
}

</script>
```

> コンパイラマクロはなぜ import が必要ないか?
> コンパイラマクロは、コンパイル時に Vue が解釈し、コードを生成するため、コンパイル時に必要な情報を提供するだけで、実際のコードには含まれない。そのため、コンパイラマクロを使う際には、import が必要ない。
> `<script setup>` は、Vue の糖衣構文(シンタックスシュガー)であり、コンパイル時には、通常の Composition API のコードに変換される。

### ワーク

コンパイラマクロの種類を調べて、従来の構文との対応を理解しよう。

参考: [script setup](https://ja.vuejs.org/api/sfc-script-setup.html#script-setup)
