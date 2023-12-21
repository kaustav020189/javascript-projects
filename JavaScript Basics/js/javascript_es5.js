// CLASSES AND INHERITANCE //
// ======================= //

class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  // super() not required if constructor not defined
  // it still inherits properties and methods of 'Human' class
  gender = "man"; // parent property overridden
  surname = "Banerjee";
}

class Person2 extends Human {
  constructor() {
    super();
    this.name = "Kaustav";
  }

  printName() {
    console.log(this.name);
  }
}

const person = new Person();
const person2 = new Person2();
person2.printName();
person.printGender();

// SPREAD AND REST OPERATOR [three dots ...] //
// ========================================= //

// Depends where we use it, to call it spread or rest

// SPREAD operation

oldarray = [1, 2, 3, 4];
newarray = [...oldarray, 5, 6]; // -> spreads open an array / object
console.log(newarray); // [ 1, 2, 3, 4, 5, 6 ]

oldobject = { name: "kaustav", age: 34 };
newobject = { ...oldobject, gender: "male" }; // -> spreads open an array / object
console.log(newobject); // { name: 'kaustav', age: 34, gender: 'male' }

// REST operation (used to merge a list of function arguments into an array)
function exampleFunc1(...args) {
  // args is the new array
  return args.filter(function (element) {
    return element === 1;
  });
}

console.log(exampleFunc1(1, 2, 3));
