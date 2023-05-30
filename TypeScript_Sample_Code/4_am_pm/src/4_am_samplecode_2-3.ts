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
  async function async(num: number) {
    try {
      if (num % 2 === 0) {
        const result1: string = await promise(5000, "1回目の非同期処理");
        const result2: string = await promise(4000, `${result1}→2回目の非同期処理`);
        const result3: string = await promise(2000, `${result1}→3回目の非同期処理`);
      } else {
        throw new Error("渡されてきた引数が2で割り切れません");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  async(35)
    //thenはawaitの処理が全て終わってから実行されるためresolveやrejectでメッセージを渡すことができない
    .then(() => console.log("全ての非同期処理が完了しました"))
    .catch((err) => console.log(err));
}
