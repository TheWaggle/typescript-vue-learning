enum Priorities {
  HIGH,
  MIDDLE,
  LOW,
}

let p: Priorities = Priorities.HIGH;
console.log(p);
console.log(Priorities[p]);

enum Priorities2 {
  HIGH = "高",
  MIDDLE = "中",
  LOW = "低",
}
let p2: Priorities2 = Priorities2.HIGH;
console.log(p2);
console.log(Priorities2[p2]);
