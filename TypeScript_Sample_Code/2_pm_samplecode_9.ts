function print(value: number): void;
function print(value: boolean): void;
function print(value: any): void {
  if (typeof value == "number") {
    console.log(value.toFixed(0));
  } else {
    console.log(value ? "真" : "偽");
  }
}

print(3.1415); //3
print(false); //偽
//print("hogehoge"); //エラー
