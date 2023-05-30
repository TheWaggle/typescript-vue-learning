let val: unknown = 10;
val = "Target";
val = [true, false, false];
console.log(val.trim()); //エラー

//型ガードを入れる
if (typeof val === "string") {
  console.log(val.trim());
}

let val2: any = 10;
val2 = "Target";
val2 = [true, false, false];
console.log(val2.trim()); //コンパイルは通るが実行時エラー
