// SELECTORS
// ---------

// get element by ID
const headerEL = document.getElementById("main-heading");
console.log(headerEL); // shows full h1 tag element

// get elements by class name
const listItems = document.getElementsByClassName("list-items");
console.log(listItems); // gives an HTMLCollection (not array) consisting 5 elements

// get elements by tag name
const listItemTags = document.getElementsByTagName("li");
console.log(listItemTags); // gives an HTMLCollection (not array)  consisting 5 elements

// query selector (select an element by a particular tag)  // ** selects the first matching item in case of multiple occurences of this tag
const div = document.querySelector("div");
console.log(div); // returns a specific HTMLElement object (in this case HTMLDivElement)

// query selector all (select all element by a particular tag)
const divs = document.querySelectorAll("div");
console.log(divs); // gives a NodeList[] (not array)

// STYLING HTML from JS
// --------------------

// 1. select element / elements using any of the above
// 2. use <selected-name-variable>.style.<css-property-written-in-JS-syntax> = <value>
// ** CSS properties which are single word are written same in JS. for multi-worded hyphenated words change into camel case for JS

headerEL.style.color = "yellowgreen";
div.style.borderColor = "grey";

// Creating and Modifying elements
// -------------------------------

const newLI = document.createElement("li");
const ulEL = document.querySelector("ul");

ulEL.append(newLI);

// Retrieving text of an element
const firstListItem = document.querySelector("li");
console.log(firstListItem.textContent); // returns text
console.log(firstListItem.innerText); // returns text

// setting text of an element
//newLI.innerText = "Game of Thrones";

// Modifying attributes and classes
newLI.setAttribute("class", "list-items"); // similarly removeAttribute() is possible

// DOM Traversal
// -------------

console.log(ulEL.parentNode); // returns div element containing all child structure
console.log(ulEL.parentElement); // same. but element is a type of node (HTMLElement is a type of NodeElement)

console.log(ulEL.childNodes); // NodeElements[] (not array)
console.log(ulEL.firstChild); // NodeElement
console.log(ulEL.lastChild); // NodeElement

console.log(ulEL.children); // HTMLElements[] (not array)
console.log(ulEL.firstElementChild); // HTMLElement
console.log(ulEL.lastElementChild); // HTMLElement

// Event Handling
// --------------

const buttons = document.querySelectorAll(".btn");

const button2 = buttons[1];
button2.addEventListener("click", () => {
  alert("Button 2 was clicked");
});

const button3 =
  document.querySelectorAll(".container")[1].children[1].children[2]
    .children[1];
console.log(button3);
button3.addEventListener("mouseover", (e) => {
  e.target.style.color = "green";
});
button3.addEventListener("mouseout", (e) => {
  e.target.style.color = "black";
});

// adding or removing CSS classes on event is also possible with add() / remove()

// EVENT Delegation [important]
// ----------------------------
// This is a technique to add a SINGLE event listener to a parent element,
// which then adds it to all of its present and future descendant elements (not just direct child).

const theULItem = document.querySelector("ul#event-listener");

theULItem.addEventListener("click", (e) => {
  console.log(e.target.innerText + " was clicked"); // prints corresponding <movie name> was clicked

  e.target.style.backgroundColor = "#c1cfcd";
});
