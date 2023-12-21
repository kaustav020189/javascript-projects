// Debouncing is a programming practice used to ensure that time-consuming tasks
// do not fire so often and stall the performance of the web page.
// In other words, it limits the rate at which a function gets invoked.

// Below is a custom (polyfill) implementation of Debounce function

function debounceResults(callback, delay) {
  // using closure concept to keep track of timer
  let timer;
  return function (params) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(params);
    }, delay);
  };
}

const handleChange = debounceResults((e) => {
  console.log(e.target.value);
}, 1000);

const input = document.getElementById("debounceInput");

input.addEventListener("input", handleChange);
