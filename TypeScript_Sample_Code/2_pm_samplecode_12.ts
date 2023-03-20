type Comic = {
  isbn: string;
  title: string;
};

type Magazine = {
  mcode: string;
  tite: string;
};

function getInfo(): Comic | Magazine {
  return {
    isbn: "",
    title: "",
  };
}
//型ガード関数の定義
function isComic(inf: Comic | Magazine): inf is Comic {
  return (inf as Comic).isbn != undefined;
}
//型に応じて操作を分岐
let info1 = getInfo();
if (isComic(info1)) {
  //ISBNコードを取得(Comic型の操作)
  console.log(info1.isbn);
} else {
  //雑誌コードを取得(Magazine型の操作)
  console.log(info1.mcode);
}
