//ジェネリック型を使わない書き方(string)
const stringBond = (ary1: string[], val: string): string[] => {
  let sum = val;
  return ary1.map((val) => sum + val);
};
console.log("stringBond:", stringBond(["abc", "def"], "text:"));

//ジェネリック型を使わない書き方(number)
const numberBond = (ary1: number[], val: number): number[] => {
  let sum = val;
  return ary1.map((val) => sum + val);
};
console.log("numberBond:", numberBond([100, 200], 300));

//共通化
type Bond<T> = { (ary1: T[], val: T): T[] };

const generitStringBond: Bond<string> = (ary1, val) => {
  let sum = val;
  return ary1.map((val) => sum + val);
};
console.log("generitStringBond:", generitStringBond(["abc", "def"], "text:"));

const generitNumberBond: Bond<number> = (ary1, val) => {
  let sum = val;
  return ary1.map((val) => sum + val);
};
console.log("generitNumberBond:", generitNumberBond([100, 200], 300));
