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
