{
  async function asyncFunc(num: number): Promise<void | string> {
    //非同期処理
    if (num % 10 === 0) {
      return "成功";
    } else {
      throw new Error("非同期処理に失敗しました");
    }
  }
  asyncFunc(80)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err.message));
}
