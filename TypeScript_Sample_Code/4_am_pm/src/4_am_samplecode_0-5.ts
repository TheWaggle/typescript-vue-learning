{
  function PromisFunc(msg: string, time: number) {
    return new Promise<void | string>((resolve, reject) => {
      //管理したい非同期処理
      setTimeout(() => {
        if (time < 6000) {
          console.log(msg);
          resolve(); //成功時の呼び出し
        } else {
          reject(`${msg}の非同期で失敗しました`);
        }
      }, time);
    });
  }

  PromisFunc("1回目の非同期", 2000)
    .then(() => PromisFunc("2回目の非同期", 300))
    .then(() => PromisFunc("3回目の非同期", 3000))
    .then(() => PromisFunc("4回目の非同期", 6000))
    .then(() => PromisFunc("5回目の非同期", 1000))
    .catch((err) => console.log(err));
}
