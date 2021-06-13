"use strict";

// Callback Hell example
class UserStorage {
  loginUser = (id, password) =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        if (
          (id === "jonghyeon" && password === "123456") ||
          (id === "coder" && password === "123456")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000)
    );

  getRoles = (user) =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        if (user === "jonghyeon") {
          resolve({ name: "jonghyeon", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000)
    );
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage //
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
