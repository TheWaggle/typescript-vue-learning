# vue3-template for Track

This template should help get you started developing with Vue 3 in Vite.

## How to Use

### ローカル受験

[Track CLI のインストール](https://help.train.tracks.run/ja/articles/8733789) と [ローカル受験の準備](https://help.train.tracks.run/ja/articles/8734101) をリンク先の案内に沿って行ってください。

`track clone` コマンドで作成したフォルダーの直下にこのプロジェクトのファイルをコピーアンドペーストしてください。

ペーストすると以下のようなファイル構成になります。

```bash
.
├── .track
├── lib
├── public
│   ├── index.html
│   ├── index.js
│   └── style.css
├── src
│   ├── assets
│   ├── components
│   ├── App.vue
│   └── main.ts
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc.json
├── env.d.ts
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

```bash
# 0. パッケージのインストール in /path/to/your/challenge-project
npm install

# 1. ローカルの開発サーバー起動
npm run dev

# 2. ビルドコマンド
npm run build

# 3. テスト実行
npm run build && track run
```

`track run` コマンドでシステムにビルドしたファイルをアップロードし、テストが実行されます。[ローカル受験の準備](https://help.train.tracks.run/ja/articles/8734101) に従って、テストを実行、提出してください。

### ローカルで開発、手動でアップロードし、テストを実行する場合

`npm run build` で `public` フォルダーにビルドされたファイルを、Webエディター上の同じファイルにコピー＆ペーストして上書きしてください。

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
