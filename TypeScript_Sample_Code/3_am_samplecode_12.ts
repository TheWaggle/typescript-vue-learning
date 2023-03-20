interface Dog {
  //Dog型を定義
  type: string; //プロパティシグニチャ
  info(): void; //メソッドシグニチャ
}

//Dog型の変数dを宣言
let d: Dog = {
  type: "チワワ",
  info() {
    console.log(`${this.type}は小型犬です。`);
  },
};
d.info();
