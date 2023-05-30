{
  class Goods {
    name: string;
    private price: number;
    //インスタンス化する際に渡されるstring型の`name`変数とnumber型の`price`変数
    constructor(name: string, price: number) {
      //このクラスのnameプロパティに引数nameの値を代入
      this.name = name;
      //このクラスのpriceプロパティに引数priceの値を代入
      this.price = price;
    }
  }

  let g = new Goods("チョコチップクッキー", 580);
  //クラス内からしかアクセスできないpriceプロパティに外部からアクセスするのはNG
  g.price = 800;
}
