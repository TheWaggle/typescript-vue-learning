{
  function change(value: string | number) {
    //引数valueを大文字に
    //return value.toUpperCase(); //エラー
  }

  function change2(value: string | number) {
    //引数valueを大文字に
    if (typeof value === "string") {
      return value.toUpperCase();
    } else {
      return value.toFixed(1);
    }
  }
}
