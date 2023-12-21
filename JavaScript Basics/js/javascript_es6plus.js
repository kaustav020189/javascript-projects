// CLASSES AND INHERITANCE //

class Human {
  gender = "male"; // constructor definition and 'this' not required in es7
  printGender = () => console.log(this.gender);
}

class Person extends Human {
  // super() not required if constructor not defined
  // it still inherits properties and methods of 'Human' class
  gender = "man"; // parent property overridden
  surname = "Banerjee";
}

class Person2 extends Human {
  name = "Kaustav";

  printName = () => console.log(this.name);
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
exampleFunc1 = (...args) => {
  // args is the new array
  return args.filter((element) => element === 1);
};

console.log(exampleFunc1(1, 2, 3));

// DESTRUCTURING //
// ========================================= //

const arr1 = ["Hello", "Kaustav", "Banerjee"];
[a, b] = arr1;
console.log(a); // Hello
console.log(b); // Kaustav
[a, , c] = arr1;
console.log(c); // Banerjee

// {age} = {age : 12, gender : 'male'};  // syntax for Object destructuring. However not supported directly in JS

// PRIMITIVE (NUMBER, STRING, BOOLEAN, ETC.) AND REFERENCE (ARRAYS & OBJECTS) TYPES //
// ========================================= //
let var1 = 1;
let var2 = var1;
var1 = 3;
console.log(var2); // will print 1

let obj1 = {
  name: "Kaustav",
};
let obj2 = obj1; // stores the same pointer
// this can avoided by using the spread operator
let obj3 = {
  ...obj1, // because it extracts all the members and creates fresh object
};
obj1.name = "Banerjee";
console.log(obj2.name); // will print "Banerjee"
console.log(obj3.name); // will print "Kaustav"

// ARRAY METHODS / FUNCTIONS //
// ========================================= //
// Example -
// map()
numbers = [1, 2, 3, 4];

doubleNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(doubleNumbers);

// there are many more array functions like this
