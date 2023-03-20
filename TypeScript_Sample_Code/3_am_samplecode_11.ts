{
  class Calc {
    constructor(private _count: number) {}
    get count(): number {
      //現在値を取得するgetter
      return this._count;
    }
    plus(count: number): this {
      //与えられた値countで加算
      this._count += count;
      return this;
    }
    minus(count: number): this {
      //与えられた値countで減算
      this._count -= count;
      return this;
    }
  }
  let calc = new Calc(20);
  console.log(calc.plus(10).minus(5).count); //結果：25
}
