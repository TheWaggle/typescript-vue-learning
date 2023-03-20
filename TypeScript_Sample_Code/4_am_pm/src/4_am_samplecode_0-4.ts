{
  function PromisFunc1(msg: string, time: number) {
    return new Promise<string>((resolve, reject) => {
      //管理したい非同期処理
      setTimeout(() => {
        console.log(msg);
        resolve(`${msg}成功！`); //成功時の呼び出し
      }, time);
    });
  }

  function PromisFunc2(msg: string, time: number) {
    return new Promise<string>((resolve, reject) => {
      //管理したい非同期処理
      setTimeout(() => {
        console.log(msg);
        resolve(`${msg}→2回目の非同期成功`); //成功時の呼び出し
      }, time);
    });
  }

  function PromisFunc3(msg: string, time: number) {
    return new Promise<string>((resolve, reject) => {
      //管理したい非同期処理
      setTimeout(() => {
        console.log(msg);
        resolve(`${msg}→3回目の非同期成功`); //成功時の呼び出し
      }, time);
    });
  }

  PromisFunc1("1回目の非同期", 5000)
    .then((msg) => PromisFunc2(msg, 300))
    .then((msg) => PromisFunc3(msg, 1000));
}
