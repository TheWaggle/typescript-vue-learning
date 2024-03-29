# 総復習

## 復習問題 1

---

TypeScript で開発するメリットを説明しましょう。

<br>

## 復習問題 2

---

TypeScript における基本の型の表を完成させましょう。

| 種類              | 概要・注意事項など                                                        | コード例                    |
| ----------------- | ------------------------------------------------------------------------- | --------------------------- |
| boolean(真偽値)型 | true/false の 2 つの値がある。比較したり(`===`)、否定したり(`!=`)して使う | `let bool: boolean = true;` |
| number(数値)型    |                                                                           |                             |
| string(文字列)型  |                                                                           |                             |
| Array(配列)型     |                                                                           |                             |
| tuple 型          |                                                                           |                             |
| any 型            |                                                                           |                             |
| void 型           |                                                                           |                             |
| null 型           |                                                                           |                             |
| undefined 型      |                                                                           |                             |
| object 型         |                                                                           |                             |

<br>

## 復習問題 3

---

型アノテーションとは何か？リテラル型にも触れて、型推論と比較しながらわかりやすく解説しましょう。

<br>

## 復習問題 4

---

インデックスシグネチャについてコードも交えてわかりやすく解説しましょう。

<br>

## 復習問題 5

---

オブジェクト型を宣言するときに使用できる修飾子のオプション(?)、readonly 修飾子についてコードも交えてわかりやすく解説しましょう。

<br>

## 復習問題 6

---

型エイリアス、合併、交差についてコードも交えてわかりやすく解説しましょう。

<br>

## 復習問題 7

---

以下の名前付き関数について、① 関数式、② アロー関数、③ アロー関数の省略記法に書き換えましょう

```typescript
function hello(name: string) {
  return `Hello,${name}`;
}
```

<br>

## 復習問題 8

---

ジェネリック型についてプログラミング初心者にコードも交えて、書き方、どのようなときに使用するのか？使用することで得られるメリットは何か？をわかりやすく解説しましょう。

<br>

## 復習問題 9

---

モジュール化についてどのようなときにモジュール化をするのか？モジュール化するメリットをわかりやすく解説しましょう。

<br>

## 復習問題 10

---

非同期処理について、`setTimeout`を使い、引数に指定した秒数に従い順番にメッセージを表示するような同期的な処理を書きましょう。
ただし、10 秒以上の秒数を指定した場合はエラーメッセージを出しましょう。

```typescript
//処理イメージ
//5秒後に"1回目の非同期処理"と表示
//3秒後に"2回目の非同期処理"と表示
//2秒後に"3回目の非同期処理"と表示
4回目の非同期は10秒後と設定しておく
5回目は1秒後に表示するように設定しておく
//"4回目の非同期処理に失敗しました"と表示
//処理終了

//4回目の非同期処理をコメントアウトすると1つ1つメッセージが表示された後、"全ての非同期処理が完了しました"と表示される。

---4回目の非同期処理で失敗するログイメージ---

1回⽬の⾮同期処理
2回⽬の⾮同期処理
3回⽬の⾮同期処理
4回⽬の⾮同期処理が失敗しました。


----4回目の非同期処理をコメントアウトし、成功した場合のログイメージ

1回⽬の⾮同期処理
2回⽬の⾮同期処理
3回⽬の⾮同期処理
5回⽬の⾮同期処理
全ての⾮同期処理が完了しました


```

---

```

ex)5 秒後にメッセージを表示 → さらに 3 秒後にメッセージを表示 → さらに 2 秒後にメッセージを表示
```
