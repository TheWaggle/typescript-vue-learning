# コンポーネントの登録

## グローバルコンポーネントとローカルコンポーネント

---

コンポーネントには、グローバルコンポーネントとローカルコンポーネントの 2 種類がある。

## グローバルコンポーネント

グローバルな領域にコンポーネントを登録する。
Vue インスタンスを別々においてもどこからでも使用することができる

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

<div id="app1">
  <h2>1つめのvueインスタンス</h2>
  <my-component></my-component>
  <my-component></my-component>
</div>

<div id="app2">
  <h2>2つめのvueインスタンス</h2>
  <my-component></my-component>
  <my-component></my-component>
  <my-component></my-component>
</div>
```

```javascript
Vue.component("my-component", {
  data: function () {
    return {
      count: 0,
    };
  },
  template: '<p>カウント指数{{count}}<button @click="count++">+</button></p>',
});
new Vue({
  el: "#app1",
});
new Vue({
  el: "#app2",
});
```

<div style="page-break-before:always"></div>

### ローカルコンポーネント

---

特定のインスタンスのみで使えるように登録する

```html
<div id="app1">
  <h2>1つめのvueインスタンス</h2>
  <my-component></my-component>
  <my-component></my-component>
</div>

<div id="app2">
  <h2>2つめのvueインスタンス</h2>
  <my-component></my-component>
  <my-component></my-component>
  <my-component></my-component>
</div>
```

```javascript
const component = {
  data: function () {
    return {
      count: 0,
    };
  },
  template: '<p>カウント指数{{count}}<button @click="count++">+</button></p>',
};

new Vue({
  el: "#app1",
  components: {
    "my-component": component,
  },
});
new Vue({
  el: "#app2",
});
```

> ローカル登録している`#app1`のみでコンポーネントを使用できる
> 使用エリアを限定できるローカル登録の方が一般的によく使われる
