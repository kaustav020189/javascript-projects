// example 1 : here the 'this' keyword will point to the object context because it is being called from the returned object

const func1 = () => {
  var a = {
    name: "kaustav",
    getName: function () {
      // this has to be a named function. 'this' in arrow functions do not point to object
      console.log(this.name);
    },
  };
  return a;
};
func1().getName(); // prints kaustav

// example 2 :
// 1. first will print 1
// 2. but second is using the call() method and supplying 'this'. Since the function is being invoked from setTimeout() and
// since 'this' does not point to functions, it will move up and point to the global object. Therefore, it will print the
// global value 10
var status = 10;

setTimeout(() => {
  const status = 5;

  const data = {
    status: 1,
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); // prints 1
  console.log(data.getStatus.call(this)); // prints 10 (but must be run on browser)
}, 0);
