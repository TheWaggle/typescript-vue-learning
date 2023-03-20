if (true) {
  var i: number = 1;
}
//ブロック外でも有効
console.log(i);

if (true) {
  let s: number = 2;
}
//ブロック外はコンパイルエラー
//console.log(s);
