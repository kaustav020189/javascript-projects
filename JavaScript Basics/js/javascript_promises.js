// example Promise object from some simple synchronous logical statements
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});

// access the Promise object.
// 1. anything inside .then() is going to run for resolve()
// 2. anything inside .catch() is going to run for reject()
p.then((message1) => {
  console.log("Resolved : " + message1);
})
  .then(() => {
    console.log("Complete");
  })
  .then(() => {
    console.log("another"); // we can chain as many then() as we want to.
  })
  .catch((error) => {
    console.log("Error : " + error);
  });

// fetch() API (new Promise based HTTP req-res mechanism)
const fetchDemo = () => {
  const req = fetch("https://dummyjson.com/products/5");
  req
    .then((data) => {
      return data.json();
    })
    .then((products) => {
      console.log(products);
    })
    .catch((e) => {
      // throw new Error(e);
    });
};

fetchDemo();

// Promises can be written in a simpler way using ASYNC-AWAIT
// the concept of async await is simply to write cleaner code, instead of chaining a whole lot of 'then's
// we write await, before the Promise call, and declare the parent function as async, to notify the JS engine.

// Whenever the JS interpreter encounters an await, it pauses the function execution (only other statements in that function)
// at that step for it to complete. Once it is complete, only then it proceeds.

const asyncFetchDemo = async () => {
  await fetch("https://dummyjson.com/products/5")
    .then((res) => res.json())
    .then((json) => console.log(json));
};

asyncFetchDemo();
