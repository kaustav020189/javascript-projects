// EVENT LOOP snippet - what will be the sequence of output ?

console.log("a");
setTimeout(() => console.log("from set timeout"), 0);
Promise.resolve(() => console.log("from promise").then((res) => res()));
console.log("b");

// Answer
// a
// b
// from promise
// from set timeout

// Currying in JavaScript

function calculateVolume(height) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}

const volume = calculateVolume(4)(5)(6);

// INFINITE currying (adding example)    similar to recursion concept

function currySum(a) {
  return function (b) {
    if (b) {
      return currySum(a + b);
    }
    return a;
  };
}

console.log(currySum(1)(2)(3)(4)()); // params can be increased as much as possible

// Functions in an object

const calc = {
  total: 0,
  add: function (a) {
    this.total += a;
    return this;
  },
  subtract: function (b) {
    this.total -= b;
    return this;
  },
  multiply: function (c) {
    this.total *= c;
    return this;
  },
};

const result = calc.add(10).subtract(5).multiply(5).add(5);
console.log(result.total);
