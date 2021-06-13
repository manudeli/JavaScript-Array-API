"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍊", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log("Loop", fruits[i]);
}
// b. for of
for (let fruit of fruits) {
  console.log("for of", fruit);
}
// c. forEach
fruits.forEach((fruit) => console.log("forEach", fruit));

// 4. Addition, Deletion, Copy
// push: add an item to the end
fruits.push("🍓", "🍐");
console.log(fruits);

// pop: remove an item from the end
let lastFruit = fruits.pop();
console.log(fruits, lastFruit);

// unshift: add an item to the beginning
fruits.unshift("🍓", "🍈");
console.log(fruits);

// shift: remove an item from the beginning
let beginningFruit = fruits.shift();
let beginningFruit2 = fruits.shift();
console.log(beginningFruit2, beginningFruit, fruits);

// NOTE!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push("🍈", "🍓");
console.log(fruits);
fruits.splice(1, 1, "🍏", "🍉");
console.log(fruits);

// combine two arrays
const fruits2 = ["🍐", "🥥"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.indexOf("🍉"));

// includes
console.log(fruits.includes("🍎"));
console.log(fruits.includes("🍉"));

// lastIndexOf
fruits.unshift("🍎");
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.lastIndexOf("🍎"));
