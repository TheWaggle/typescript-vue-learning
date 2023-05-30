function PromisFunc1() {
  return new Promise<string>((resolve, reject) => {
    //管理したい非同期処理
    setTimeout(() => {
      console.log("サーバー呼び出し");
      resolve("成功"); //成功時の呼び出し
    }, 3000);
  });
}

function PromisFunc2() {
  return new Promise<string>((resolve, reject) => {
    //管理したい非同期処理
    setTimeout(() => {
      console.log("サーバー呼び出し2");
      resolve("サーバー呼び出し2の成功"); //成功時の呼び出し
    }, 3000);
  });
}

function PromisFunc3() {
  return new Promise<string>((resolve, reject) => {
    //管理したい非同期処理
    setTimeout(() => {
      console.log("サーバー呼び出し3");
      resolve("サーバー呼び出し3の成功"); //成功時の呼び出し
    }, 1000);
  });
}

PromisFunc1()
  .then(() => {
    return PromisFunc2();
  })
  .then(() => {
    return PromisFunc3();
  });
