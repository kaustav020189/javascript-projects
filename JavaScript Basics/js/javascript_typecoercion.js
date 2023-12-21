// IMPLICIT Type Casting
let x;

// Number + String = String --> JS treats this as STRING CONCATENATION
x = 10 + "10"; // 1010 string

// Number * String = Number --> Since JS knows that multiplying two strings does not make sense
x = 10 * "5"; // 50 number

// Number + null = Number
x = 10 + null; // 10 number

// Number + Boolean = Number
x = 10 + true; // 11 number
x = 10 + false; // 10 number

// Number + undefined = NaN
x = 10 + undefined; // NaN number

console.log(x, typeof x);
