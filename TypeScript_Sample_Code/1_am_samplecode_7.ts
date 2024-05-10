enum Priorities {
  High,
  Middle,
  Low,
}

let p: Priorities = Priorities.High;
console.log(p);
console.log(Priorities[p]);

enum Priorities2 {
  High = "高",
  Middle = "中",
  Low = "低",
}
let p2: Priorities2 = Priorities2.High;
console.log(p2);
console.log(Priorities2[p2]);
