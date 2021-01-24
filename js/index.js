console.log("Hello World");

// let and const
let age = 30;
age = 31;

// DATA TYPES
const name = "Brad";
const age = 37;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof z);

console.log("My name is " + name + " and I am " + age);
console.log(`My name is ${name} and I am ${age}`);

const s = "Hello World";
let val;
val = s.length;
val = s.toUpperCase();
val = s.toLowerCase();
val = s.substring(0, 5);
val = s.split("");

const numbers = [1, 2, 3, 4, 5];
const fruits = ["apples", "oranges", "pears", "grapes"];
console.log(numbers, fruit);

//Arrays start at 0
console.log(fruits[1]);

// Add value
fruits[4] = "blueberries";

// Add value using push()
fruits.push("strawberries");

// Add to beginning
fruits.unshift("mangos");

// Remove last value
fruits.pop();

// // Get index
console.log(fruits.indexOf("oranges"));

const person = {
  firstName: "John",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main st",
    city: "Boston",
    state: "MA",
  },
  printName: function () {
    console.log(firstName);
  },
};

console.log(person.name);
console.log(person.hobbies[1]);
console.log(person.address.city);
console.log(person.printName());

person.email = "jdoe@gmail.com";

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isComplete: false,
  },
  {
    id: 2,
    text: "Dinner with wife",
    isComplete: false,
  },
  {
    id: 3,
    text: "Meeting with boss",
    isComplete: true,
  },
];

console.log(todos[1].text);

// break and continue

// LOOPS
for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

let i = 0;
while (i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

// Loop Through Arrays
// For Loop
for (let i = 0; i < todos.length; i++) {
  console.log(` Todo ${i + 1}: ${todos[i].text}`);
}

// CONDITIONALS

// Simple If/Else Statement
const x = 30;

//Difference between == and ===
//Truthy and falsy values

// && and || and !

if (x === 10) {
  console.log("x is 10");
} else if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}

// Switch
color = "blue";

switch (color) {
  case "red":
    console.log("color is red");
  case "blue":
    console.log("color is blue");
  default:
    console.log("color is not red or blue");
}

// Ternary operator / Shorthand if
const z = color === "red" ? 10 : 20;

// FUNCTIONS
function greet(greeting = "Hello", name) {
  if (!name) {
    // console.log(greeting);
    return greeting;
  } else {
    // console.log(`${greeting} ${name}`);
    return `${greeting} ${name}`;
  }
}

// return statement

// ARROW FUNCTIONS
const greet = (greeting = "Hello", name = "There") => `${greeting} ${name}`;
console.log(greet("Hi"));

// OOP

// ES6 CLASSES
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Get Full Name
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("John", "Doe", "7-8-80");
console.log(person1.getFullName());

// EXPLAIN GLOBAL OBJECTS
