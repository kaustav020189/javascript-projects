// All primitive/reference type and functions are inherited from the Object.prototype class in JS
// We can hence access member methods and properties of any type using the following syntax

let ar = [1, 2, 3, 4, 5];
console.log(ar.__proto__);

// ARRAY methods find(fn) vs filter(fn)
// find returns one value which passes the condition in the function
// filter returns an array of all values that passes the condition in the function

console.log(ar.find((el) => el % 2 === 0)); // returns 2
ar.filter((el) => el % 2 === 0).forEach((el) => console.log(el)); // returns [2,4]

// Array forEach()

let arr = [1, 2, 3, 4, 5];

arr.forEach((el, index, origArr) => {
  console.log(
    `current element is ${el} and index is ${index} and the original array is ${origArr}`
  );
});

// prints

// current element is 1 and index is 0 and the original array is 1,2,3,4,5
// current element is 2 and index is 1 and the original array is 1,2,3,4,5
// current element is 3 and index is 2 and the original array is 1,2,3,4,5
// current element is 4 and index is 3 and the original array is 1,2,3,4,5
// current element is 5 and index is 4 and the original array is 1,2,3,4,5

// Array filter()

let arr2 = [1, 2, 3, 4, 5];

const resArr2 = arr2.filter((el) => el % 2 === 0);

console.log(resArr2); // prints [2, 4]

let arr3 = ["cow", "dog", "deer", "elephant"];

const resArr3 = arr3.filter((el) => el.length >= 4);

console.log(resArr3); //prints [ 'deer', 'elephant' ]

// Array map()

let arr4 = [2, 4, 6, 8];

console.log(arr4.map((el) => el ** 2)); // prints [ 4, 16, 36, 64 ]

const func1 = (a, b) => console.log(a + b);
const func2 = (a, b) => console.log(a * b);

let arr5 = [func1, func2];

arr5.map((el) => el(2, 3)); // prints 5, 6

// Array reduce()        // reduce array to a single value. e.g. if we have a shopping cart and we wanna reduce all the individual prices to a total

// Syntax :
// val = arr.reduce((accumulator, currentValue) => {             // accumulator contains the updated / cumulated valur after each iteration, currentValue is self-explanatory
//     return accumulator + currentValue;
// }, initialValue);                                            // initialValue is optional (sets an initial value for the accumulator)

arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

resArr6 = arr6.reduce((acc, el) => acc + el);
console.log(resArr6); // prints 55

// Difference between forEach() and map() - map() returns and array, but forEach() only does looping operation

array4 = [1, 2, 3, 4, 5, 6];

const forEachRes = array4.forEach((el) => {
  return el * 2;
});

const mapRes = array4.map((el) => {
  return el * 3;
});

console.log(forEachRes); // undefined
console.log(mapRes); // [ 3, 6, 9, 12, 15, 18 ]

const chainRes = array4
  .map((el) => {
    return el * 3;
  })
  .filter((el) => {
    return el % 2 == 0;
  });

console.log(chainRes); // [ 6, 12, 18 ]
