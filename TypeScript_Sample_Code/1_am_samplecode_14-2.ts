//オブジェクトの場合
//共用体型
type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  contractDate: Date;
};
//AdminとEmployeeを結合して新しくElevetedEmployeeを作成
type ElevetedEmployee = Admin & Employee;
const e1: ElevetedEmployee = {
  name: "rick",
  privileges: ["create-server"],
  contractDate: new Date(),
};

//リテラル型の場合
type Comb = string | number;
type Numeric = number | boolean;

type Mix = Comb & Numeric;
