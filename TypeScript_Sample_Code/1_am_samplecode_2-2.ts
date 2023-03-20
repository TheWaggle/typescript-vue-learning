function toRound(value: number) {
  // b. 四捨五入する
  return Math.round(value);
}
// a. number型の引数にstring型の値を渡す
console.log(toRound(<any>"hoge"));
