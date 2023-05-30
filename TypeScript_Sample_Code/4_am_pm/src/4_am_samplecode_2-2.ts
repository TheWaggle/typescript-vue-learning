{
  function promise(time: number, msg: string) {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (time < 6000) {
          console.log(msg);
          resolve(`${msg}成功`);
        } else {
          reject(`${msg}が失敗しました。`);
        }
      }, 3000);
    });
  }
  async function async() {
    const result1: string = await promise(5000, "1回目の非同期処理");
    const result2: string = await promise(4000, `${result1}→2回目の非同期処理`);
    const result3: string = await promise(2000, `${result1}→3回目の非同期処理`);
  }

  async()
    //thenはawaitの処理が全て終わってから実行されるためresolveやrejectでメッセージを渡すことができない
    .then(() => console.log("全ての非同期処理が完了しました"))
    .catch((err) => console.log(err));
}
