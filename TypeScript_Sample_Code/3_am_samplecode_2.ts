{
  class Person {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    public show(): string {
      return `${this.name}は${this.age}歳です。`;
    }
  }

  let p = new Person("理央", 30);
  console.log(p.show());
  console.log(p.name);
}
