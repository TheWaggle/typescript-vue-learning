{
  class Goods {
    //クラス内のみアクセスできるstrign型の`name`プロパティ
    private name: string;
    //クラス内のみアクセスできるnumber型の`price`プロパティ
    private price: number;
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
    //クラス外からも自由にアクセスできる戻り値がstringの`show`メソッド
    //書かなくても同じ意味だが明示的に書いている
    public show(): string {
      return `${this.name}は${this.price}円です。`;
    }
  }

  let g = new Goods("チョコチップクッキー", 580);
  //クラス外からもアクセス可能なshowメソッドにアクセス
  console.log(g.show());
  //クラス内のみアクセスできるnameプロパティにアクセスしているのでエラーがでる
  console.log(g.name);
}
