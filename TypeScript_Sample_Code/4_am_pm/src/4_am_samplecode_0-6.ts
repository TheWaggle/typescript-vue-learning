try {
  if (true) {
    //正常処理
    throw new Error("非同期処理に失敗しました");
  }
} catch (e: any) {
  console.log(e.message);
}
