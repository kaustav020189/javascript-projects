/* Memoization is a type of caching that speeds up computer programs. 
It does this by storing the results of expensive function calls to pure functions 
and returning the cached result when the same inputs occur again.
    THIS CONCEPT USES JS CLOSURES TO STORE THE VALUE OF THE CACHE.
*/

const memoizedFunc = (fn) => {
  // fn is the function being supplied to be run

  const cache = new Map(); // cache stores the arguments list being supplied to fn

  return function (...args) {
    // ...args is list of unlimited arguments to function fn

    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    // we are writing 'this' here because the syntax for call() and apply() is as follows, and we need to maintain the syntax.
    // apply([reference to an object from where it is being called OR null OR undefined], [arguments in the form of array])
    // in this case, 'this' is referring to the global object (if calling from a browser), if we run this in terminal
    // this will be undefined. So, basically if we supply undefined / null, the code still works.

    // const result = fn.apply(null, args);  // this would also work
    // const result = fn.apply(undefined, args);  // this would also work
    const result = fn.apply(this, args);
    cache.set(key, result);

    return result;
  };
};

const memoizedSum = memoizedFunc(function (a, b) {
  return a + b;
});

const memoizedFact = memoizedFunc(function (n) {
  if (n == 1) {
    return 1;
  } else {
    return memoizedFact(n - 1) * n;
  }
});

console.log(memoizedSum(2, 3)); // Output: Computed to 5
console.log(memoizedSum(2, 3)); // Output: Cached 5
console.log(memoizedFact(5)); // Output: Computed to 120
console.log(memoizedFact(2, 3)); // Output: Cached 120
