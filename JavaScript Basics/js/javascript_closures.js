// example 1

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count); // prints 1
  }
  console.log(count); // prints 0
})();

// example 2

// write a function to allow -
// var addSix = createBase(6);
// addSix(10)  // should return 16
// addSix(21)  // should return 27

function createBase(num) {
  return function (innerNum) {
    return num + innerNum;
  };
}

var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

// example 3

// Time optimization can also be done using Closures.

// In the below code, the for-loop section is untouched on every call. It is just there to simulate a slow operation.
// The only statement that changes on each call is the console.log(index) because we are supplying a new index every time.
// This is a perfect choice of using a closure, so that the for-loop section is just run once and automatically is accessible in the inner function scope (if required)

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
console.time(6);
closure(6);
console.timeEnd(6);
console.time(50);
closure(50);
console.timeEnd(50);

// Data abstraction and private variables/functions for a parent function
// Say we want to increase a counter variable with a function call. If we declare a global variable and increase that with a function
// call, that variable can be accessed from anywhere and can be increased.
// This is where Closures come in handy. Below code shows how we can have a private variable in a function, which is inaccessible by the
// outside world, and any inner child function can access that variable and modify its value. The best part is, every function
// exceution context creates a closure and hence the private variable's value is maintained with that scope (even after the function call)

function counter() {
  var count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = counter();
counter1(); // count = 1
counter1(); // count = 2
counter1(); // count = 3

// if we create a new variable with the function assignment, a new memory is assigned, hence we get a new copy of the count variable

const counter2 = counter();
counter2(); // count =1

// Closure using function constructor syntax
function Mathematic() {
  var count = 0;
  this.incrementCount = function () {
    count++;
    console.log(count);
  };
  this.decrementCount = function () {
    count--;
    console.log(count);
  };
}

const mathematic1 = new Mathematic();
mathematic1.incrementCount(); // prints 1
mathematic1.incrementCount(); // prints 2
mathematic1.decrementCount(); // prints 1
