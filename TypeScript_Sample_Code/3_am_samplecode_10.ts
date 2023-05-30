{
  //getAreaメソッドを持ったFigureインターフェイスを定義
  interface Figure {
    getArea(): number;
  }

  //getAreaメソッドを持つが、Figureインターフェイスを明示的に実装しない
  class Circle {
    constructor(private radius: number) {}
    //getAreaメソッドを実装
    getArea(): number {
      return this.radius * this.radius * 3.14;
    }
  }

  //Figure型の変数にCircleオブジェクトを代入
  let c: Figure = new Circle(5);
  console.log(c.getArea());
}
