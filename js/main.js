// ELEMENT SELECTORS

// DOM MANIPULATION (Explain the importance of js)

// Single Element Selectors
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector(".container"));
// console.log(document.querySelectorAll(".item"));
// const items = document.querySelectorAll(".item");

// MANIPULATING THE DOM
// const ul = document.querySelector(".items");

// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Brad";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

// const btn = document.querySelector(".btn");
// btn.style.background = 'red';

// EVENTS

// Mouse Event

// btn.addEventListener("mouseover", () => {
//     console.log("Hover");
//   });

//   btn.addEventListener("mouseout", () => {
//     console.log("Hover over");
//   });

const btn = document.querySelector("button");
const list = document.querySelector(".list");
const inputField = document.getElementById("input");

btn.addEventListener("click", () => {
  if (inputField.value) {
    const li = document.createElement("li");
    li.classList.add("list-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    li.innerText = inputField.value;
    li.appendChild(checkbox);

    list.appendChild(li);
    inputField.value = "";
  }
});
