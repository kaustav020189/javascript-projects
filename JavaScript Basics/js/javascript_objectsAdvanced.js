// Creating objects

// method 1
const obj1 = {
  name: "Kaustav Banerjee",
  age: 34,
  job: "student",
};
// method 2
const obj2 = new Object();
obj2.name = "Jane Doe";
obj2.age = 35;
obj2.job = "Developer";
obj2.details = { company: "N/A", joined: 2023, salary: 85000 };

// Accessing objects
const sal = obj2.details.salary; // 1st method
const joiningDate = obj2["details"]["joined"]; // 2nd method

// Object spreading (using ...)
ob1 = { a: 1, b: 2 };
ob2 = { c: 1, d: 2 };
console.log({ ...ob1, ...ob2 }); // { a: 1, b: 2, c: 1, d: 2 }

obj3 = { ...obj1, ...obj2 };
console.log(obj3); // this prints the following. Since some keys are duplicate in both obj1 and obj2, it gets overwritten
// {
//     name: 'Jane Doe',
//     age: 35,
//     job: 'Developer',
//     details: { company: 'N/A', joined: 2023, salary: 85000 }
//   }

// Spread operator is just a latest version of Object.assign({}, ob1, ob2) syntax

// Getting an array of the keys of an object
keysOfObj = Object.keys(obj2);
console.log(keysOfObj); // prints [ 'name', 'age', 'job', 'details' ]

// Getting the length of an object (counting number of keys)
lengthOfObj = Object.keys(obj2).length;

// Getting an array of the values of an object
valuesOfObj = Object.values(obj2);

// Getting an array of the key:value pairs of an object
keyValPairs = Object.entries(obj2);

// Check if an object has a certain key (boolean)
hasProp = obj1.hasOwnProperty("details"); // returns true

// OBJECT DESTRUCTURING
object1 = {
  name: "kaustav",
  prof: "developer",
  country: "germany",
  skills: ["JS", "Node", "React"],
  education: { bachelor: "wbut", master: "th-owl" },
};

const { skills } = object1; // [ 'JS', 'Node', 'React' ]    // Curly braces and key name to extract that key
const { name, prof } = object1; // name = kaustav, prof = developer
const {
  education: { master },
} = object1; // master = th-owl       // multi level extraction using colon and again curly braced key name

// using a different variable name during destructuring
const { skills: skillset } = object1;
console.log(object1.skills); // prints [ 'JS', 'Node', 'React' ] original object value doesn't change
console.log(skillset); // prints [ 'JS', 'Node', 'React' ] destructured value in a variable with a different name than that of the key

// Dynamic keys for objects
const anObj = {
  firstname: "kaustav",
  age: 34,
};

const anotherkey = "lastname";
anObj[anotherkey] = "banerjee"; // adds lastname: 'banerjee' to the object

// deleting object entries
delete anObj.age; // removes the key

console.log(anObj);

// Objects as keys in another object (CONVERTED TO STRING)
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123; // Object a gets updated to {"[object Object]": 123}
a[c] = 456; // Same thing happens. Object a gets updated to {"[object Object]": 456} This time the previous value gets overridden

console.log(a); // prints { '[object Object]': 456 }

// Objects comparison
//--------------------
// JavaScript always compares objects by reference (memory location) AND NOT BY VALUE / TYPE
// so below, both cases will be false because even though the values are same, their references are always different.

console.log({ a: 1 } == { a: 1 }); // returns false
//console.log({ a: 1 } === { a: 1 }); // returns false

let obja = { a: 1 };
let objb = obja;
console.log(obja == objb); // returns true
console.log(obja === objb); // // returns true

// Object memory location based snippet
// ----------WHAT WIL BE THE OUTPUT ?-------

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); // prints 20
multiply(); // prints 20
multiply(value); // prints 20
multiply(value); // prints 40
