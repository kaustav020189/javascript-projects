// JSON syntax is same as JS objects (object literals) except that JSON keys need to be enclosed in quotes

const obj1 = {
  name: "Kaustav",
  age: 30,
  job: "developer",
};

// Convert object to JSON string
const jsonStr = JSON.stringify(obj1);
console.log(jsonStr); // prints {"name":"Kaustav","age":30,"job":"developer"}

// Convert JSON string to JS object
const obj2 = JSON.parse(jsonStr);
console.log(obj2); // prints { name: 'Kaustav', age: 30, job: 'developer' }
