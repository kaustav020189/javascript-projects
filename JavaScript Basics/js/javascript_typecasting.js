// STRING to NUMBER
let amount = "100";
let amountNaN = "hello world";

// amount = parseInt(amount); // method 1
// amount = +amount; // method 2: unary method
amount = Number(amount); // method 3: using the Number class constructor

console.log(amount, typeof amount); // 100 number

amountNaN = +amountNaN;

console.log(amountNaN, typeof amountNaN); // NaN number

// NUMBER to STRING
let amt = 100;

// amount = amt.toString(); // method 1: toString() is a method that doesn't work on primitive types. However, in cases like this, JS sees that we are trying to use toString() on a primitive and automatically wraps the number into a Number type.
amt = String(amt); // method 2: using the String class constructor

console.log(amt, typeof amt); // 100 string

// BOOLEANS - For Numbers, only 0 is converted to false, everything else is true. For String, empty string is false, others are true
let bool1 = 0,
  bool2 = 1,
  bool3 = 10;
bool1 = Boolean(bool1);
bool2 = Boolean(bool2);
bool3 = Boolean(bool3);

console.log(bool1, typeof bool1, bool2, typeof bool2, bool3, typeof bool3); // false boolean true boolean true boolean

let bool4 = "hello world";
let bool5 = "";
bool4 = Boolean(bool4);
bool5 = Boolean(bool5);

console.log(bool4, typeof bool4, bool5, typeof bool5);
