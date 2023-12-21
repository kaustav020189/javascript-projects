const fruits = ["apple", "pear", "orange"];
const berries = ["strawberries", "blueberries", "raspberry"];

fruits.push(berries);

console.log(fruits);
// [
//     'apple',
//     'pear',
//     'orange',
//     [ 'strawberries', 'blueberries', 'raspberry' ]
//   ]

const fruits2 = ["apple", "pear", "orange"];
const berries2 = ["strawberries", "blueberries", "raspberry"];

x = fruits2.concat(berries); // simple concatenation

console.log(x);
// [
//     'apple',
//     'pear',
//     'orange',
//     'strawberries',
//     'blueberries',
//     'raspberry'
//   ]

// SPREAD Operator
y = [...fruits2, ...berries2];

console.log(y);

// Flatten Arrays (multi dimension to one dimension)
const z = [1, 2, [3, 4], 5, [6, 7], 8];

console.log(z.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

// Static methods on array
isArr = Array.isArray(z);
console.log(isArr); // true

fromArr = Array.from("12345"); // [1,2,3,4,5]

const a = 1,
  b = 2,
  c = 3;
arrOf = Array.of(a, b, c); //[1,2,3]

// Array destructuring
ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [first, second] = ar1;
console.log(first); // prints 1
[first, second, ...rest] = ar1;
console.log(first, second, rest); // prints 1 2 [3, 4, 5, 6, 7, 8, 9]
