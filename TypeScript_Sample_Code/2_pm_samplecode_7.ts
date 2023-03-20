{
  function userInfo(userId: string, userName = "NON NAME"): string {
    if (userName == "NON NAME") {
      return `あなたのIDは${userId}です`;
    } else {
      return `${userName}さんのIDは${userId}です`;
    }
  }

  console.log(userInfo("dummy", "NON NAME"));
  console.log(userInfo("dummy", undefined)); //OK省略とみなされる
  //console.log(userInfo("dummy", null)); //エラー nullを割り当てることはできない
}
