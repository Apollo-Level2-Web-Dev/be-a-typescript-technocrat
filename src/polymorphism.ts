// polymorphism : bohurupi

class Person {
  getSleep() {
    console.log(`I am a Normal Happy Person.I sleep for 8 hours`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`I am a student. I sleep  7 hours`);
  }
}

class NextLevelDeveloper extends Person {
  getSleep() {
    console.log(`I am a Next Level developer . I sleep for 6 hours`);
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

getSleepingHours(person3);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  // area= pi*r*r
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  // area= height*width

  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

const getArea = (param: Shape) => {
  console.log(param.getArea());
};

const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(10, 20);

getArea(shape3);
