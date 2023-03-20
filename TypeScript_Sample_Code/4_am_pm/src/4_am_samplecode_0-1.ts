{
  const p = new Promise<string>((resolve, reject) => {
    //管理したい非同期処理
    setTimeout(() => {
      console.log("サーバー呼び出し");
      resolve("成功"); //成功時の呼び出し
    }, 3000);
  });
  console.log(p); //Promise{<pending>}
  p.then((msg) => {
    console.log(p); //Promise{'成功'}
    console.log(`${msg}しました。サーバーからデータを受け取った後に実行`);
  });
}
