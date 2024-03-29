# TypsScript で開発するメリット

主なメリットを 3 つ以下にまとめている。

<br />

## 型定義により、コードの保守性と可読性が上がる

---

- ドキュメントとしての側面
  - 変数や定数の中にどんな種類の値が入っているか？や関数の戻り値はどんな種類の値か？がプログラムを読み込まなくても理解できる
- リンターとしての側面
  - JavaScript より自由度が減る分、コーディングスタイルの一貫性が保てる。コードを書いている時点でエラーが表示されるため、バグに気づける。
- ES5 コンパイラとしての側面
  - ブラウザが古いバージョンの場合(ES5)、トランスパイルすることで、全てのブラウザで動くコードとなる
    ![ecmascript](./img/ecmascript.png)

<br />

## 型や追加構文はあるが基本的に通常の JavaScript と同様の構文が使える

---

TypeScript は JavaScript の機能をすべて利用できることから`スーパーセット`とよばれている。(上位互換)つまり、JavaScript で書いたコードは TypeScript でもある。JavaScript を学習した人であれば、身につけた知識を活かしつつ、TypeScript を学習することができる。
(JavaScript に対するプラスアルファは 90%が型検査について)

<br />

## 型を利用するかどうかは開発者の自由

---

型定義せずとも型推論ができるため、すべてを型定義する必要がない。
つまり、JavaScript で書かれたプログラムを一部のみ TypeScript に書き換えてコンパイルすることが可能なため段階的に利用できる。
