// ALL ABOUT var, let and const

// SCOPING (a region of a code where a particular variable is recognized)

// var is functional scope
// let and const are block scope

// EXAMPLE 1

var a = 10;
let b = 20;
const c = 30;

{
  var a = 15;
  let b = 25;
  const c = 50;
  console.log(a); // prints 15
  console.log(b); // prints 25
  console.log(c); // prints 50
}

console.log(a); // prints 15
console.log(b); // prints 20
console.log(c); // prints 30

// EXAMPLE 2

var x = 10;

{
  var x = 15;
  let y = 25;
  const z = 50;
  console.log(x); // prints 15
  console.log(y); // prints 25
  console.log(z); // prints 50
}

console.log(x); // prints 15
console.log(y); // error undefined
console.log(z); // error undefined

// SHADOWING (only possible with let, const and NOT var - since var doesn't have block scope)

let name = "Kaustav";
const job = "developer";

if (true) {
  let name = "Shrestha";
  const job = "consultant";
  console.log(name); // prints Shrestha
  console.log(job); // prints consultant
}
console.log(name); // prints Kaustav
console.log(job); // prints developer

// HOISTING

console.log(a1);
console.log(b1);

var a1 = 2;
let b1 = 3;
