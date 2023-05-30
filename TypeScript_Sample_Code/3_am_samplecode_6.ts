class Goods {
  //子クラスでアクセスできるようにprotected プロパティ名name:string型
  protected name: string;
  //子クラスでアクセスできるようにprotected プロパティ名price:number型
  protected price: number;
  //インスタンス化されるときに実行されるconstructor(仮引数name:string型,仮引数price:number型)
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  //showメソッド:戻り値string型
  show(): string {
    return `${this.name}は${this.price}円です。`;
  }
}
//Goodsクラスを継承する子クラスSaleGoods
class SaleGoods extends Goods {
  //priceDownメソッド：戻り値string型
  priceDown(): string {
    return `${this.name}は今だけ50%オフです。`;
  }
}
//子クラスをnewしてオブジェクトを生成し、変数pに代入
let g = new SaleGoods("チョコチップクッキー", 580);
//親クラスのshowメソッドを呼び出す
console.log(g.show());
//子クラスのpriceDownメソッドを呼び出す
console.log(g.priceDown());

//　親クラスをnewしてオブジェクトを生成し、変数pに代入
let g2 = new Goods("チーズケーキ", 600);
//親クラスのshowメソッドを呼び出す
console.log(g2.show());
//子クラスのpriceDownメソッドを呼び出す
console.log(g2.priceDown());
