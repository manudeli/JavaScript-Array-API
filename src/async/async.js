// async & await
// clear style of using promise

// TODO: 1. async
async function fetchUser() {
  // do network request in 10 secs...
  return "jonghyeon";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// TODO: 2. await ✨

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getApple() {
  await delay(1000);
  return "🍎";
}
async function getBanana() {
  await delay(1000);
  return "🍌";
}
/*
function getBanana() {
  return delay(3000).then(() => "🍌");
}
*/

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}
/*
 function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}
 */

pickFruits().then(console.log);
