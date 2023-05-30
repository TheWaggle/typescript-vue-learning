{
  class Goods {
    //class内からしかアクセスできない_priceプロパティはnumber型
    //!はプログラマがコンパイラに対してこの変数はundefinedやnullになることはないと伝える記述
    private _price!: number;
    //class内からしかアクセスできない_nameプロパティはstring型
    private _name!: string;

    //getterアクセサー プロパティ名price:プロパティのデータ型
    get price(): number {
      //戻り値 プロパティの値を格納するprivate変数
      return this._price;
    }
    //setterアクセサー プロパティ名price(設定値を受け取る仮引数：仮引数の型)
    set price(value: number) {
      //もし仮引数valueの値が0より小さい場合
      if (value < 0) {
        //エラーを返す
        throw new RangeError("priceプロパティは正数で指定してください。");
      }
      //private変数に値を格納する
      this._price = value;
    }
  }

  let g = new Goods();
  //setterアクセサーに1000を渡す
  g.price = 1000;
  console.log(g.price);

  //プライベートプロパティに500を渡す
  g._price = 500;
  console.log(g._price);

  //プライベートプロパティに"Ice Cream"を渡す
  g._name = "Ice Cream";
  console.log(g._name);
}
