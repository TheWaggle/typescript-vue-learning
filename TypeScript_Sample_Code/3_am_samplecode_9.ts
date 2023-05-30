//getAreaメソッドを持ったFigureインターフェイスを定義
interface Figure {
  getArea(): number;
}

//Figureインターフェイスを実装したCircleクラス
class Circle implements Figure {
  constructor(private radius: number) {}
  //getAreaメソッドを実装
  getArea(): number {
    return this.radius * this.radius * 3.14;
  }
}

let c = new Circle(5);
console.log(c.getArea());
