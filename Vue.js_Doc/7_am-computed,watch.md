# computed(算出プロパティ)、watch(監視プロパティ)

サンプルコード：[ComputedWatch.vue](../Vue.js_Sample_Code/sample-app-vue3/src/components/ComputedWatch.vue)

## computed(算出プロパティ) とは

---

- 算出プロパティとも呼ばれる
- テンプレート内に式を書けることは便利だがロジックが複雑になるとコードが煩雑になる
- リアクティブなデータをそのまま描画するのではなく、文字列を加工したり、数値計算したりなどロジックを挟むときに使用する
- 関数の戻り値をデータのように扱える

> 参考：[comoputed](https://ja.vuejs.org/guide/essentials/computed.html)

```html
<label for="lastName">氏</label>
<input type="text" if="lastName" v-model="user.lastName" />
<label for="firstName">名</label>
<input type="text" if="firstName" v-model="user.firstName" />
<p>{{ bindName }}</p>
```

```typescript
setup() {
  const user = ref({
    lastName: "",
    firstName: "",
  });
  const bindName = computed(() => {
    if (user.value.firstName && user.value.lastName) {
      return user.value.lastName + user.value.firstName;
    }
    return "お名前を入力してください";
  });
  return { user, bindName };
}
```

<div style="page-break-before:always"></div>

## computed と通常関数の違い

---

同じことを通常の関数で書いた場合と比較してみる

```html
<label for="lastName">氏</label>
<input type="text" if="lastName" v-model="user.lastName" />
<label for="firstName">名</label>
<input type="text" if="firstName" v-model="user.firstName" />
<p>{{ bindNameMethod() }}</p>
```

```typescript
setup() {
  const user = ref({
    lastName: "",
    firstName: "",
  });
  const bindNameMethod = () => {
    if (user.value.firstName && user.value.lastName) {
      return user.value.lastName + user.value.firstName;
    }
    return "お名前を入力してください";
  };
  return { user, bindNameMethod };
}
```

<div style="page-break-before:always"></div>

### ログを出して違いを確認する

---

- method は他のリアクティブな値に変更が加わるたびに発動する
- computed は対象のリアクティブな値が変更されたときのみ発動する

```html
<h2>watchとmethod</h2>
<label for="lastName">氏</label>
<input type="text" if="lastName" v-model="user.lastName" />
<label for="firstName">名</label>
<input type="text" if="firstName" v-model="user.firstName" />
<p>computedを使用：{{ bindName }}</p>
<p>methodを使用：{{ bindNameMethod() }}</p>

<button @click="number++">+</button>
<p>カウントアップ{{ number }}</p>
```

```typescript
setup() {
  // computed
  const bindName = computed((): string => {
    console.log("computed発動");
    if (user.value.firstName && user.value.lastName) {
      return user.value.lastName + user.value.firstName;
    }
    return "お名前を入力してください";
  });
  // 通常関数
  const bindNameMethod = (): string => {
    console.log("method発動");
    if (user.value.firstName && user.value.lastName) {
      return user.value.lastName + user.value.firstName;
    }
    return "お名前を入力してください";
  };
  //...
}
```

> computed はリアクティブな依存関係に基づきキャッシュされる

<div style="page-break-before:always"></div>

## watch(監視プロパティ)とは

---

- Vue インスタンス上の**特定のデータの変更**を監視する
- データの変更に応じて必要な処理を行う場合に使用する
- `computed`か`watch`かで迷った場合は`computed`を使うのがよい場合が多い

> 参考： [watch](https://ja.vuejs.org/guide/essentials/watchers.html)

### computed と method で書いたコードを watch に置き換える

---

```html
<h2>computedとmethodとwatch</h2>
<label for="lastName">氏</label>
<input type="text" if="lastName" v-model="user.lastName" />
<label for="firstName">名</label>
<input type="text" if="firstName" v-model="user.firstName" />
<p>computedを使用：{{ bindName }}</p>
<p>methodを使用：{{ bindNameMethod() }}</p>
<p>
  watchを使用：{{ userName }}<span v-if="!userName"
    >お名前を入力してください</span
  >
</p>
```

```typescript
setup() {
  //...
  const userName = ref("");
  // watch
  watch(
    () => user.value.firstName,
    (newValue: string, oldValue: string) => {
      console.log(`watch:${newValue},${oldValue}`);
      userName.value = user.value.lastName + newValue;
    }
  );

  watch(
    () => user.value.lastName,
    (newValue: string) => {
      userName.value = newValue + user.value.firstName;
    }
  );

  return { user, bindName, bindNameMethod, userName };
}
```

> とても冗長なコードになる

<div style="page-break-before:always"></div>

### watch を使ってエラー処理をする

```html
<h2>watchでエラー処理</h2>
<label for="title">タイトル入力</label>
<input type="title" id="title" v-model="title" />
<p>{{ title }}</p>
<p v-if="error" :style="red">{{ error }}</p>
```

```typescript
setup() {
  const title = ref("");
  const error = ref("");

  watch(
    () => title.value,
    (newValue: string) => {
      error.value = newValue.length > 10 ? "10文字以内でお願いします！" : "";
    }
  );

  return { title, error };
}
```
