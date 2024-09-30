// let x: number = 10;
// console.log(x);

function greet(firstName: string) {
  console.log(`Hello ${firstName}`);
}

greet("John");

//type inference
function sum(a: number, b: number) {
  return a + b;
}

//string, number, boolean, any**, void

console.log(sum(2, 8));

function ageCheck(age: number): boolean {
  if (age > 17) {
    return true;
  }
  return false;
}

let x = ageCheck(20); //type inference->no need to specify the type explicitly

console.log(ageCheck(20));
console.log(ageCheck(5));
console.log(ageCheck(17));
console.log(ageCheck(17.5));

function returnObj(name: string, age: number): { name: string; age: number } {
  //sometimes they are unavoidable or what? No, typescript infers to what we are returning right! If we explicitly specify, we get an error
  return {
    name: name,
    age: age,
  };
}

let obj = returnObj("John", 20);
console.log(obj);

function runAfter1s(functionToRun: () => void) {
  setTimeout(functionToRun, 1000);
}
//Thing to learn: giving types to the functions

//learning some important ts config stuff

//Chat
//We can use zod for type in javascript, is there any difference?
//zod does type checks during runtime(99% of the time), while this is during the compile time.

//interfaces:

interface User {
  name: string;
  age: number;
}

// 1st usecase: it is giving types to like what we've seen for objects
function greetUser(user: User) {
  console.log(`Hi ${user.name}`);
}

function isAdult(user: User): boolean {
  if (user.age > 17) {
    return true;
  }
  return false;
}

let isAdultTrue = isAdult({ name: "John", age: 20 });
console.log(isAdultTrue);
greetUser({ name: "John", age: 20 });

//implementing interfaces, popular interview question: what is the difference between interfaces and types?- 1:22:41 typescript intro
//Other usecase:
interface Person {
  name: string;
  age: number;
  greet: (phrase: string) => void;
}

class Employee implements Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet(phrase: string) {
    console.log(`${phrase}, ${this.name}`);
  }
  //..any extra methods specific to Employee class
}

let user1 = new Employee("John", 20);
user1.greet("Hi there");

class Manager implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(`${phrase}, Manager saab ${this.name}`);
  }
  //..any extra methods specific to Manager class
}

let user2 = new Manager("Kahn", 20);
user2.greet("Hi there");

//types: similar to interfaces but can't implement classes from types but they do few extra things like Union, Intersection..
//We mostly use interfaces and use types for some specific cases.
type stringOrNumber = string | number;

function greet2(name: stringOrNumber) {
  console.log(`Hi ${name}`);
}

greet2("Kane");
greet2(777); //no errror here!

interface faculty {
  name: string;
  department: string;
}

type staff = {
  name: string;
  position: string;
};

type staffAndFaculty = staff & faculty;

let personA: staffAndFaculty = {
  name: "John",
  department: "IT",
  position: "Manager",
};

console.log(personA);
