{
  //関数リテラル
  let circle = function (radius: number): number {
    const PI = 3.14;
    return radius * radius * PI;
  };
  console.log(circle(3));

  //関数リテラル
  let circle2: (radius: number) => number = function (radius: number): number {
    const PI = 3.14;
    return radius * radius * PI;
  };
  console.log(circle2(3));
}
