function output(result: string) {
  return `結果は${result}です。`;
}
// a. 数値型を渡すとエラー
output(20);

// b. any型に変換
output(<any>20);

// c. as構文でも置き換え可
output("20" as any);
