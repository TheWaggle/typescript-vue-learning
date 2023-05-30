{
  //`Goods`クラス(Goods設計図)
  class Goods {
    //string型の`name`というプロパティ
    name: string;
    //number型の`price`というプロパティ
    price: number;
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
    //戻り値がstring型の`show`という名前のメソッド
    show(): string {
      return `${this.name}は${this.price}円です。`;
    }
  }
  //Goodsクラスからオブジェクトを生成して、`g`という変数に格納する
  let g = new Goods("チーズケーキ", 690);
  //コンソールにpオブジェクトのshowメソッドを呼び出す。
  console.log(g.show());

  //クラスに対してインスタンス化せず、直接メソッドを呼び出すのはNG。
  console.log(Goods("チーズタルト", 500).show());
}
