"use strict";

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// TODO: 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("jonghyeon");
    // reject(new Error("no network"));
  }, 2000);
});

// TODO:  2. Consumers: then, catch, finally
promise //
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// TODO: 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));