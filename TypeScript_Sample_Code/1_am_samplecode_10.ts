//falsyな値の集合
type FalsyType = 0 | false | null | undefined;

//番号
type Num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

//列挙型の部分型

enum Lang {
  ENGLISH,
  SPANISH,
  KOREAN,
  VIETNAMESE,
  JAPANESE,
}
type AsianLang = Lang.KOREAN | Lang.VIETNAMESE | Lang.JAPANESE;
