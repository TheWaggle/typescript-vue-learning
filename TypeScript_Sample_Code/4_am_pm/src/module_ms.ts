//NetWork名前空間を定義
namespace NetWork {
  export class Http {}
  export function https() {}
}

//名前空間配下のクラス/関数の呼び出す
let http = new NetWork.Http();
NetWork.https();
