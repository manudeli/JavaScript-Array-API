// JSON
// JavaScript Object Notation

// 1. Object to JSON
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify([`apple`, `banana`]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  // Not contained in JSON
  jump: () => {
    console.log(`${name} can jump!`);
  },
};
json = JSON.stringify(rabbit);
console.log(json);

// Pick some of object
json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return value === "name" ? "jonghyeon" : value;
});
console.log(json);

// 2. JSON to Object
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
// obj.jump(); When we convert Object to JSON, function will be removed

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); // It's safe because slightly different JSON.parse()
