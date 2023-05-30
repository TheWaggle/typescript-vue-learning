{
  //タプル型にAnyTypeという名前を付与
  type AnyType = [string, number, boolean];
  //AnyType型の変数valを定義
  let val: AnyType = ["abc", 12, false];
  let val2: AnyType = ["abc", "12", false]; //エラー

  //共用型の場合
  type OrType = number | string;
  function add(a: OrType, b: OrType): string {
    if (typeof a === "number" && typeof b === "number") {
      return String(a + b);
    }
    if (typeof a === "string" && typeof b === "string") {
      return a.concat(b);
    }
    return String(a) + String(b);
  }
}
