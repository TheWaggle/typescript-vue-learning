{
  function promise(time: number, msg: string) {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (time < 6000) {
          console.log("時間のかかる処理");
          resolve("成功");
        } else {
          reject(`${msg}が失敗しました。`);
        }
      }, 3000);
    });
  }
  async function asyncFunc() {
    await promise(5000, "1回目の非同期処理"); //成功
    await promise(8000, "2回目の非同期処理"); //失敗
    await promise(2000, "3回目の非同期処理"); //成功
    //aync()で何かを返したい場合はreturnを入れる
    return "全ての非同期処理が成功しました";
  }
  // async()
  //   .then(() => {
  //     promise(5000, "1回目の非同期処理");
  //   })
  //   .then(() => {
  //     promise(5000, "1回目の非同期処理");
  //   })
  //   .then(() => {
  //   promise(5000, "1回目の非同期処理");
  //   })

  asyncFunc()
    //thenはawaitの処理が全て終わってから実行されるためresolveでメッセージを渡すことができない
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
}
