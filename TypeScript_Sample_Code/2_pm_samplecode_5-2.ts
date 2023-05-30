//例外スローで、終端には到達しない

function error(): never {
  throw new Error("Error");
}

//無限ループなので、終端には到達しない
function eternal(): never {
  while (true) {
    //処理
  }
}
