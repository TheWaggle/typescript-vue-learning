{
  let person: [string, number, boolean] = ["Miku", 68.92, true];

  console.log(person[0].substring(2)); //結果：ku
  console.log(person[1].toFixed(1)); //結果：68.9
  console.log(person[2].toFixed(1)); //エラー
  console.log(person[2] == false); //結果：true

  //タプルの濫用を避けるべき理由
  let person2: [string, number, boolean] = ["Miku", 68.92, true];
  person2.shift(); //先頭の要素を削除
  console.log(person2[0].substring(2)); //実行時エラー
}
