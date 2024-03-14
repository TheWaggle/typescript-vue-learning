# コンポーネントの作成

サンプルコード：[App.vue](../Vue.js_Sample_Code/sample-app/src/App.vue)

## コンポーネントとは

---

- Vue.js アプリケーションの構成要素である再利用可能な UI 部品
- Vue.js のコンポーネントシステムを使用して定義され、テンプレート、JavaScript のロジック、スタイルシートをまとめてカプセル化される
- 自己完結型の機能を持っており、他のコンポーネントやアプリケーションの他の部分と独立して動作する

## コンポーネントシステムとは

---

コンポーネントを定義するための仕組みのこと。アプリケーションをより小さな部品に分割し、各部品を独立して開発、テスト、保守をすることができる。

> Vue.js のコンポーネントシステムは、再利用性が高く、保守性と拡張性を向上できる。

- コンポーネントの組み合わせ：コンポーネントは Vue.js のコンポーネントシステムを使用して、他のコンポーネントやアプリケーションの他の部分と組み合わせることができる。
- コンポーネントの通信：コンポーネントは親コンポーネントからデータを受け取ったり、子コンポーネントにデータを渡したりすることができる。このようなコンポーネント間の通信を簡単に行うことができる。

## コンポーネントの使用

---

SFC 内でコンポーネントを使用するためには、`<script>`タグ内で`import`し、`components`オプションに登録する必要がある。
コンポーネントのカスタムタグ名はパスカルケースが推奨される。

```typescript
// App.vue
import Directive from "./components/Directive.vue";
import ComputedWatch from "./components/ComputedWatch.vue";
import OriginalFilter from "./components/OriginalFilter.vue";

export default {
  components: {
    Directive,
    ComputedWatch,
    OriginalFilter,
  },
};
```

<div style="page-break-before:always"></div>

## グローバル登録

---

`app.component`メソッドを使用して、グローバルにコンポーネントを登録することができる。グローバル登録されたコンポーネントはアプリケーション全体で使用できる。反対に、前項 #コンポーネントの使用 で説明した方法は、ローカル登録と呼ばれ、そのコンポーネントが定義されたコンポーネント内でのみ使用できる。

```typescript
// main.ts
import { createApp } from "vue";
import MyComponent from "./components/MyComponent.vue";

const app = createApp({});
app.component("my-component", MyComponent);
app.mount("#app");
```

### グローバル登録の欠点

- グローバルコンポーネントでは、未使用のコンポーネントを削除してくれるビルドシステムの処理 (いわゆる「ツリーシェイク」) が阻害される。グローバル登録したコンポーネントは、最後までアプリのどこにも用いなかった場合でも、最終的なバンドルには含まれ、その結果、ビルド後のファイルサイズが大きくなることがある。
- グローバル登録では、大規模なアプリケーションでの依存関係の分かりやすさが低下する。グローバル登録では、子コンポーネントを使っている親コンポーネントから、子コンポーネントの実装部分を探し出すことが難しくなる。きわめて多くのグローバル変数が使われている状況と同じように、これは長期的な保守性に影響を与える可能性がある。

ローカルでの登録を利用すると、登録したコンポーネントを使えるスコープが現在のコンポーネントのみに限定される。そのため依存関係が分かりやすくなり、ツリーシェイクが働きやすくなる。

---

## DOM で直接コンポーネントを使用する

---

(Typescript を導入しない書き方とほぼ同じとなるため JavaScript で解説)

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">
  <my-component></my-component>
  <my-component></my-component>
  <my-component></my-component>
  <my-component></my-component>
  <my-component></my-component>
</div>
```

```javascript
const app = Vue.createApp({});
app.component("my-component", {
  data: function () {
    return {
      count: 0,
    };
  },
  template: '<p>カウント指数{{count}}<button @click="count++">+</button></p>',
});
app.mount("#app");
```

> data は関数で表記する。変数とした場合参照によって共有されるため、1 つのメモリを参照していくことになる。
> 関数にすることでバラバラに増える

<div style="page-break-before:always"></div>

---

## 補足

---

### `tsconfig.json`ファイルとは何か

- TypeScript のコンパイル時に使用される設定ファイル
- Vue CLI のプロジェクト生成時に設定される
