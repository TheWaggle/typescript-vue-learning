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
  async function async() {
    await promise(5000, "1回目の非同期処理");
    await promise(6000, "2回目の非同期処理");
    await promise(2000, "3回目の非同期処理");
  }

  async()
    //thenはawaitの処理が全て終わってから実行されるためresolveでメッセージを渡すことができない
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
}
