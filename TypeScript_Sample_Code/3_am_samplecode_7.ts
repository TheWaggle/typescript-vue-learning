{
  class Goods {
    protected name: string;
    protected price: number;
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
    show(): string {
      return `${this.name}は${this.price}円です。`;
    }
  }

  class SaleGoods extends Goods {
    protected category: string;
    constructor(name: string, price: number, category: string) {
      //親クラスのコンストラクターを呼び出す
      super(name, price);
      //子クラスでは新たに、categoryプロパティにcategoryを代入
      this.category = category;
    }
    //親クラスと同名のshowメソッドをオーバーライド
    show(): string {
      return super.show() + `${this.category}です。`;
    }
  }

  let g = new SaleGoods("チョコチップクッキー", 580, "製菓");
  console.log(g.show());

  class Snack extends Goods {
    protected type: string;
    constructor(name: string, price: number, type: string) {
      super(name, price);
      this.type = type;
    }
    tasteType(): string {
      return super.show() + `${this.type}スナックです。`;
    }
  }

  let s2 = new Snack("チョコチップクッキー", 580, "甘い");
  //親クラスのshowを呼び出す
  console.log(s2.show());
}
