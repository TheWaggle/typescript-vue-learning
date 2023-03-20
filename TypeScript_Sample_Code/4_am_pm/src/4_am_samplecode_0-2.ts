const p: Promise<string> = new Promise<string>((resolve, reject) => {
  //管理したい非同期処理
  setTimeout(() => {
    console.log("サーバー呼び出し");
    resolve("成功"); //成功時の呼び出し
  }, 3000);
});
p.then((msg) => {
  console.log(`${msg}しました。サーバーからデータを受け取った後に実行`);
  setTimeout(() => {
    console.log("サーバー呼び出し2");
  }, 3000);
}).then(() => {
  console.log(`3番目の処理`);
});
