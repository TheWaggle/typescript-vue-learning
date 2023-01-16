{
  class Person {
    name: string;
    private age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  let p = new Person("鈴木", 38);
  p.age = 50;
}
