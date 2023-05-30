# フィルター

サンプルコード：[OriginalFiltter.vue](../Vue.js_Sample_Code/sample-app/src/components/OriginalFiltter.vue)

## フィルターとは

---

テキストをフォーマットするツール。表示したい要素を全て大文字にしたり小文字にしたりなど行う時に使用する

## computed とは何が違うのか

---

- 同じようなことを`computed`を使って実装できるが、データごとに実装が必要となるため、冗長になる

> 参考： [フィルター](https://v2.ja.vuejs.org/v2/guide/filters.html)

```html
<h1>{{ upperCaseTitle }}</h1>
<p>{{ upperCaseMsg }}</p>
```

```typescript
 title: string = "hello vue.js";
  msg: string = "the progressive javascript framework";
  //computed
  get upperCaseTitle(): string {
    return this.title.toUpperCase();
  }
  get upperCaseMsg(): string {
    return this.msg.toUpperCase();
  }
```

> 同じようなロジックの処理を 2 回書いている

<div style="page-break-before:always"></div>

## ローカルフィルターを設定

---

```html
<h3>{{ title | upperCase }}</h3>
<p>{{ msg | upperCase }}</p>
```

```typescript
@Component({
  filters: {
    upperCase(val: string): string | null {
      if (!val) {
        return null;
      }
      return val.toUpperCase();
    },
  },
})
```

## グローバルフィルターで設定

---

他ファイル(コンポーネント)でも使用する場合はグローバルのところで設定する
設定場所は`main.ts`

```typescript
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.filter("upperCase", function (val: string): string {
  return val.toUpperCase();
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
```
