{
  class Shape {
    //class外からもアクセス可能 静的プロパティ PI(プロパティ名): number型 = 値
    public static PI: number = 3.14159;
    //ckass外からもアクセス可能 静的メソッド circle(仮引数名：仮引数の型):戻り値の型
    public static circle(radius: number): number {
      //仮引数radiusの値*仮引数radiusの値*このclassのプロパティPI
      return radius * radius * this.PI;
    }
  }

  //new演算子でオブジェクトを生成せずとも値を参照できる
  console.log(Shape.PI);
  //new演算子でオブジェクトを生成せずともメソッドを使用できる
  console.log(Shape.circle(5));
}
