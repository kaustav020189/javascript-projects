// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.
// Polyfill function is a manually created function for an existing modern JS function (for example array methods from ES6)

// Polyfill for map()
// ==================
// 1. We are writing the definition of a function (which imitates map())
// 2. So, start by first writing the function invocation statement of map, this will be our reference and help us write the new function

// Array.map((element, index, array) => {})             // So, this is how we invoke map() and the return type is an array
// map() takes in just one param, and that is a callback function.
// So, step 1: our function will have one param named 'cb' which will be a callback
// step 2: the return type is an array so we create a new array for returning.
// step 3: since map iterates through all elements, we need a for loop. 'this' refers to the array which will call this method, hence this.length
// step 4: the returned array from map() contains elements which have the callback method applied on each of them. hence, inside the for loop, we simply push one element on each iteration
//          where the new element = cb() of current element.

Array.prototype.myMap = function (cb) {
  let retArr = [];
  for (let i = 0; i < this.length; i++) {
    retArr.push(cb(this[i], i, this));
  }
  return retArr;
};

// testing
let arr1 = [1, 2, 3, 4, 5];
console.log(
  arr1.myMap((el, i, arr) => {
    return el * 3;
  })
);

// Polyfill for filter()
// =====================

let arr2 = [2, 3, 5, 6, 7, 9, 10];

Array.prototype.myFilter = function (cb) {
  let retArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) retArr.push(this[i]);
  }
  return retArr;
};

console.log(
  arr2.myFilter((el) => {
    return el % 2 == 0;
  })
);

// Polyfill for reduce()
// =====================

let arr3 = [1, 2, 3, 4, 5];

// arr3.reduce((accumulator, currentValue, index, array) => {
//     // calculate some cumulative value
// }, initialValue);

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

console.log(
  arr3.myReduce((acc, el) => {
    return (acc = acc + el);
  })
);

// Polyfill for Array.flat()
// =========================

arrFlattable = [
  [1, 2],
  [3, 4, 5],
  [6, 7],
  [8, 9, [10, 11], 12],
];

function myFlat(arr, depth = 1) {
  let flatArr = [];
  arr.forEach((el) => {
    if (Array.isArray(el) && depth > 0) {
      flatArr.push(...myFlat(el, depth - 1));
    } else {
      flatArr.push(el);
    }
  });
  return flatArr;
}

console.log(myFlat(arrFlattable));
