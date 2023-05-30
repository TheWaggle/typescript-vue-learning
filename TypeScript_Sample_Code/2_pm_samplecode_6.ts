{
  function userInfo1(userId: string, userName?: string): string {
    if (userName == undefined) {
      return `あなたのIDは${userId}です`;
    } else {
      return `${userName}さんのIDは${userId}です`;
    }
  }
  console.log(userInfo1("st12345"));
}
