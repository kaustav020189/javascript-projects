// Function declaration / definition / statement
// ---------------------------------------------

function square(num) {
  return num ** 2;
}

// Function expression (when you store a function in a variable)
// -------------------------------------------------------------

const square = function (num) {
  return num ** 2;
};

// First class functions
// ----------------------

function displaySquare(fn) {
  console.log("Square of 5 is : " + fn(5));
}

displaySquare(square);

// IIFE (immediately invoked function expression)
// ----------------------------------------------

(function cube(num) {
  console.log(num ^ 3);
})(5); // prints the result, we need not invoke separately or assign it to a variable

// Functions and scope of variables
// --------------------------------

// var doesn't have block scope (block scope IS NOT SAME as function scope).
// This is why let and const, and block scoping were introduced in ES6

var a1 = 10,
  b1 = 20;
let c1 = 30;

function display() {
  var a1 = 100,
    b1 = 200;
  let c1 = 300;
  {
    var d1 = 100;
    let e1 = 400;
  }
  console.log("inside function", a1, b1, c1, d1, e1); // 100 200 300 100 ReferenceError
}

display();
console.log("outside function", a1, b1, c1); // 10 20 30

// Example of block scope in case of var and let

// prints 0 1 2 3 4
for (let i = 0; i < 5; i++) {
  // loops and conditional blocks also create block scope
  setTimeout(() => console.log(i), i * 1000); // setTimeout is used to make it async, but the value to be printed is already supplied at the end of each iteration
}

// prints 5 5 5 5 5
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), i * 1000); // by the time the last timeout is complete, value of i becomes 5. since var doesn't refresh the value each time, 5 is printed 5 times.
}

// REST and SPREAD operator usage in functions
// -------------------------------------------

arr = [1, 2, 3, 4];

function sum(a, b, c, d) {
  return a + b + c + d;
}

function multiply(a, ...params) {
  // REST operator
  return a * params[0] * params[1] * params[2] * params[3];
}

sum(...arr); // SPREAD operator
multiply(10, arr);

// JS module functions
// -------------------

var Module = (function () {
  function privateMethod() {
    // do some important task here...
  }

  return {
    publicMethod: function () {
      // call to privateMethod()
    },
  };
})();

// and then the publicMethod() is accessible to the outer world, whereas, the privateMethod() remains hidden and IS NOT returned.
// This approach is helpful when we want to abstract some functionality from user, like API call logic, file access logic, etc.
Module.publicMethod();

// JS Functions - keywords call(), bind() and apply()
// --------------------------------------------------

// call() - used to call a function with a modified context

var person = {
  name: "Kaustav",
  greet: function (param) {
    console.log(`Hi this is ${this.name} from ${param}`);
  },
};

var person2 = {
  name: "Shrestha",
};

person.greet("Germany"); // prints Hi this is Kaustav from Germany
// using call(context, params)
person.greet.call(person2, "USA"); // prints Hi this is Shrestha from USA

// apply() - same as call() only the params should be provided as an array

person.greet.apply(person2, ["USA"]); // prints Hi this is Shrestha from USA

// bind() - works in a similar way, but doesn't take params, only the context - and returns a modified function

const newGreet = person.greet.bind(person2);
newGreet("USA"); // prints Hi this is Shrestha from USA

// JS Functions - this keyword context in regular functions VS arrow functions
// ---------------------------------------------------------------------------

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => {
    2 * Math.PI * this.radius;
  },
};

console.log(shape.diameter); // prints 20
console.log(shape.perimeter); // prints NaN (because this.radius is undefined in global scope)

// Named Functions VS Arrow Functions VS Function expressions
// ==========================================================

// usage of 'this'

var exampleVar = 1;

var funcObj = {
  exampleVar: 10,
  namedFunc() {
    console.log(`Value of this.exampleVar is : ${this.exampleVar}`);
  },
  funcExpr: function () {
    console.log(`Value of this.exampleVar is : ${this.exampleVar}`);
  },
  anonymousFunc: () => {
    console.log(`Value of this.exampleVar is : ${this.exampleVar}`);
  },
};

funcObj.namedFunc(); // Value of this.exampleVar is : 10
funcObj.funcExpr(); // Value of this.exampleVar is : 10
funcObj.anonymousFunc(); // Value of this.exampleVar is : undefined

// syntax and hoisting
namedFn();
function namedFn(params) {
  console.log("Inside namedFn");
}
fnRef(); // will throw ReferenceError, because function expressions (hence anonymous functions) are not hoisted
const fnRef = function (params) {
  console.log("Inside fnRef");
};
anonyFn(); // will throw ReferenceError, because function expressions (hence anonymous functions) are not hoisted
const anonyFn = (params) => {
  console.log("Inside anonyFn");
};
