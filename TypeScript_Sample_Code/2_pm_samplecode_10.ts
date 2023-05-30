{
  let val: string | number;
  val = "hogehoge"; //ok
  val = 10; //ok
  //val = false; //エラー

  //戻り値としての共用型
  function circle(radius: number): number | boolean {
    if (radius < 0) {
      return false;
    } else {
      return radius * radius * 3.14;
    }
  }
  console.log(circle(10)); //314
  console.log(circle(-10)); //false
}
