try {
  if (true) {
    //正常処理
  } else {
    throw new Error("サーバーアクセス失敗");
  }
} catch (e: any) {
  console.log(e.message);
}
