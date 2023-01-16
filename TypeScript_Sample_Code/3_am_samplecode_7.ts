{
  class Person {
    protected name: string;
    protected age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    show(): string {
      return `${this.name}は${this.age}歳です。`;
    }
  }

  class BusinessPerson extends Person {
    protected clazz: string;
    constructor(name: string, age: number, clazz: string) {
      super(name, age);
      this.clazz = clazz;
    }
    show(): string {
      return super.show() + `${this.clazz}です。`;
    }
  }

  let p = new BusinessPerson("理央", 30, "主任");
  console.log(p.show());

  class Teacher extends Person {
    protected subject: string;
    constructor(name: string, age: number, subject: string) {
      super(name, age);
      this.subject = subject;
    }
    teach(): string {
      return super.show() + `${this.subject}を教えます。`;
    }
  }

  let t2 = new Teacher("大西先生", 45, "数学");
  console.log(t2.show());
}
