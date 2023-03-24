# class や style に対する v-bind

サンプルコード：[Directive.vue](../Vue.js_Sample_Code/sample-app/src/components/Directive.vue)

## class や style に対する v-bind の概要

---

- `v-bind`を使うことでクラスリストとインラインスタイルをリアクティブに操作できる
- `v-bind`が`class`と`style`と一緒に使われるとき特別な拡張機能を提供する
- 文字列だけでなく、オブジェクトや配列を返す

> 参考：[クラスとスタイルのバインディング](https://v2.ja.vuejs.org/v2/guide/class-and-style.html)

## クラスの v-bind

---

### オブジェクト構文

---

`v-bind:class`にオブジェクトを渡すことでクラスを動的に切り替えることができる

```html
<p :class="{ active: isActive }">activeクラスが付与されるとフォントサイズが大きくなります</p>
```

上記は`active`クラスの有無がデータプロパティ`isActive`の真偽値によって決まる。
オブジェクトにさらにプロパティを持たせることで、複数のクラスを切り替えることができる。

```html
<p :class="{ 'color-green': isActive, underline: isError }">文字色が変更され、アンダーラインがつきます</p>
```

`<p data-v-7fcf7e62="" class="color-green underline">文字色が変更され、アンダーラインがつきます</p>`このようにマルチクラスで描画される。

## style のバインディング

---

css のプロパティ名はキャメルケース(camelCase)またはケバブケース(kebab-case:クウォートと併用して仕様)どちらでも可能

```html
<p :style="{ color: '#red', fontSize: '20px' }">インラインスタイルを適用カラーは赤でフォントサイズは20px</p>
```

> 基本的に JavaScript はキャメルケース、HTML はケバブケースで書く。HTML は大文字と小文字の区別ができない
