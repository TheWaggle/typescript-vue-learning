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
    //そのままPromiseを返す
    return await promise(5000, "1回目の非同期処理");
  }

  async()
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
}
