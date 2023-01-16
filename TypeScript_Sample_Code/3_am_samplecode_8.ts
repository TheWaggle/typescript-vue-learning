{
  abstract class Figure {
    constructor(protected width: number, protected height: number) {}
    abstract getArea(): number;
  }

  class Triangle extends Figure {
    getArea(): number {
      return (this.width * this.height) / 2;
    }
  }

  let t = new Triangle(10, 5);
  console.log(t.getArea());

  class Circle extends Figure {
    getOuterCircumference(): number {
      return this.width * 3.14;
    }
  }

  let c = new Circle(10, 5);
  console.log(c.getOuterCircumference());
}
