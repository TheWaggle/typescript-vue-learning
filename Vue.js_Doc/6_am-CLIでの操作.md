# CLI での操作

## 作成したアプリケーションの確認

---

以下のようなディレクトリ構造になっている。

```tree
./vue-project/
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc.json
├── README.md
├── env.d.ts
├── index.html
├── package.json
├── public
│   └── favicon.ico
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── base.css
│   │   ├── logo.svg
│   │   └── main.css
│   ├── components
│   │   ├── HelloWorld.vue
│   │   ├── TheWelcome.vue
│   │   ├── WelcomeItem.vue
│   │   └── icons
│   └── main.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

- `main.ts` は Vue アプリケーションのエントリーポイントで、CSS や Vue コンポーネントを読み込んでいる。
- `App.vue` はルートコンポーネントで、`<template>`, `<script>`, `<style>` の 3 つのブロックを持つ、SFC (Single File Component) 。

<div style="page-break-before:always"></div>

## 用語の整理

---

Eslint と Prettier について、どちらもコードの品質を高めるためのプラグインである。

### Eslint とは

---

- JavaScript のための静的検証ツール。
- ファイル内のバグチェックやコーディングスタイルに一貫性を保つ。
- 潜在的なバグを見つけることができる。

### Prettier とは

---

JavaScript や CSS についてインデントがバラバラだとコードの可読性が下がる。チーム開発の際はインデントの数やインデントの種類は統一させるのがよい。
Prettier を使うとそのような調整を自動で行う。

- コードフォーマッター。
- ルールに沿ってコードを整形する。
- プロジェクトごとにルールを設定する。

<div style="page-break-before:always"></div>

### .prettierc ファイルとは

---

- Prettier の設定のみのファイル
- `.prettier.json`でも OK
- 細かな設定は Prettier の公式ページを確認[prettier.io](https://prettier.io/docs/en/options.html)
- 例としては以下のような設定がある

  ```json
  {
    //末尾のカンマ
    "trailingComma": "all",
    "singleQuote": false,
    "printWidth": 120,
    "tabWidth": 2,
    "useTabs": false
  }
  ```

### .eslintrc.cjs とは

- Eslint の設定のみのファイル
- `.eslintrc.json`でも OK
- 細かな設定は ESLint の公式ページを確認[esling.org](https://eslint.org/docs/latest/use/getting-started)
- 例としては以下のような設定がある

  ```cjs
  require("@rushstack/eslint-patch/modern-module-resolution");

  module.exports = {
    root: true, // ルートディレクトリに設定ファイルがあるかどうか
    extends: [
      "plugin:vue/vue3-essential", // Vue3の基本ルール
      "eslint:recommended", // ESLintの推奨ルール
      "@vue/eslint-config-typescript", // TypeScriptのルール
      "@vue/eslint-config-prettier/skip-formatting", // Prettierと競合するルールを無効化
    ],
    parserOptions: {
      ecmaVersion: "latest", // 最新のECMAScriptを使用
    },
    rules: {
      "vue/multi-word-component-names": "off", // 2つ以上の単語を含むコンポーネント名を強制するルールを無効化
    },
  };
  ```

<div style="page-break-before:always"></div>

## ワーク 1

---

理解があいまいな用語をしらべてまとめよう。

## ワーク 2

---

デフォルトで画面表示されている内容について、内部的にどのような順番で処理が行われる結果なのかを説明しよう。
