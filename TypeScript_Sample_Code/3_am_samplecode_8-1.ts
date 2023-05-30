{
  //抽象クラス shape
  abstract class Shape {
    //インスタンス化するときに実行する処理(子クラスでもアクセス可能 仮引数width:number型, 子クラスでもアクセス可能 仮引数height:number型)
    constructor(protected width: number, protected height: number) {}
    //抽象メソッド　getArea:戻り値number型 中身は未定義
    abstract getArea(): number;
  }

  //Shapeを継承した子クラスTriangle
  class Triangle extends Shape {
    //getAreaメソッド:戻り値number型
    getArea(): number {
      //計算結果を戻す
      return (this.width * this.height) / 2;
    }
  }

  //new演算子でTriangleオブジェクトを生成、引数は10,5
  let t = new Triangle(10, 5);
  //getAreaメソッドを呼び出す
  console.log(t.getArea());

  //Shapeを継承した子クラスCircle
  class Circle extends Shape {
    getArea(): number {
      return this.width * 3.14;
    }
  }

  let c = new Circle(10, 5);
  console.log(c.getArea());
}
