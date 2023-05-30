# Vue.js の基本構文(v-if,v-show,v-for)

サンプルコード：[Directive.vue](../Vue.js_Sample_Code/sample-app/src/components/Directive.vue)

## v-if

---

- バインディングの値の真偽値に基づいて要素の描画を行う
- v-if のエリアは切り替えると DOM 自体から削除、追加が行われる
- 兄弟要素に対して`v-else`、`v-else-if`で条件分岐を作ることができる

> 参考： [v-if](https://jp.vuejs.org/v2/api/#v-if)

```html
<label for="bloodtype"></label>
<input type="text" id="bloodtype" v-model="bloodtype" />
<p v-if="bloodtype == 'A'">あなたはA型ですね</p>
<p v-else-if="bloodtype == 'B'">あなたはB型ですね</p>
<p v-else-if="bloodtype == 'O'">あなたはO型ですね</p>
<p v-else-if="bloodtype == 'AB'">あなたはAB型ですね</p>
<p v-else-if="bloodtype == ''">血液型を入力してください</p>
<p v-else>血液型を正しく入力てきていません</p>
```

## v-show

---

- 式の値の真偽値によって DOM 要素の表示非表示を切り替える

> 参考： [v-show](https://jp.vuejs.org/v2/api/#v-show)

```html
<button type="button" @click="isActive = !isActive">表示非表示切り替えボタン</button>
<p v-show="isActive">v-showボタン表示非表示エリア</p>
```

<div style="page-break-before:always"></div>

## v-for

---

- ソースデータに基づき、要素またはテンプレートブロックを複数回描画する
- 繰り返される要素をバラバラに 1 要素ずつ取得するために`in`または`of`式を使う
- `key`属性を指定することで意図した順番になるようにする

> 参考： [v-for](https://jp.vuejs.org/v2/api/#v-for)

```html
<div class="step1">
  <h3>配列</h3>
  <ul>
    <li v-for="(nav, index) in navs" :key="index">{{ index }}:{{ nav }}</li>
  </ul>
</div>
<div class="step2">
  <h3>オブジェクト</h3>
  <ul>
    <li v-for="(val, name, index) in todo" :key="val">{{ index }}:{{ name }}:{{ val }}</li>
  </ul>
</div>
```
