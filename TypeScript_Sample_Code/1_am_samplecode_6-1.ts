let lang: { [index: string]: string } = {
  eng: "英語",
  viet: "ベトナム語",
  por: "ポルトガル語",
};

//プロパティ構文
console.log(lang.por);

//ブラケット構文
console.log(lang["por"]);

lang.jpn = "日本語";
