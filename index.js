// const question = new Map([
//   ["question", "what is the best progamming language in the world"],
//   [1, "c"],
//   [2, "python"],
//   [3, "javascript"],
//   ["correct" , 3],
//   [true, "correct"],
//   [false, "try again !!!"],
// ]);
// console.log(question.get("question"));

// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer?'))
// console.log(question.get(question.get('correct') === answer));

// const name = 'tunde'
// console.log(typeof name);

// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// for (const flight of flights.split("+")) {
//   const arrayFlight = flight.split(";");
//   const [type, from, to, time] = arrayFlight;

//   const getCode = (str) => str.slice(0, 3).toLocaleUpperCase();

//   console.log(
//     `${type.replaceAll("_", " ")} ${getCode(from)} ${getCode(to)} (${time}h)`,
//   );
// }

const account1 = {
  name: "Tunde salami Amoo",
  movements: [4000, -3000, 7000, -4000, 20000, -300, 730, -5000],
  pin: 1111,
};

const account2 = {
  name: "bolaji onileola",
  movements: [4000, -3000, 700, -4000, 20000, -300, 7300, -5000],
  pin: 2222,
};
const account3 = {
  name: "akorede onileola",
  movements: [400, -3000, 7000, -4000, 20000, -300, 7300, -5000],
  pin: 3333,
};

const accounts = [account1, account2, account3];
// // computing username

// accounts.forEach((acc) => {
//   acc.userName = acc.name
//     .toLocaleLowerCase()
//     .split(" ")
//     .map((name) => name[0])
//     .join("");
// });

// // computing balance

// accounts.forEach((acc) => {
//   acc.balance = acc.movements.reduce((acc, mov) => {
//     return acc + mov;
//   }, 0);
// });

// console.log(accounts);

// const toConfirm = prompt("ur username?");
// const account = accounts.find((acc) => acc.userName === toConfirm);
// account
//   ? console.log(account)
//   : console.log("there is no account with that username");

// const toConfirm = prompt("ur username?");
// const account = accounts.find((acc) => acc.userName === toConfirm);
// if (account) {
//   console.log(account);
// } else {
//   console.log('there is no account');
// }

// const arr = [1, [2, 3], [4, [5, 6]]];
// console.log(arr.flat());
// console.log(arr.flat(Infinity));

// const movements = [4000, -3000, 7000, -4000, 20000, -300, 7300, -5000];

// for (const [i, mov] of movements.entries()) {
//   if (mov > 0) {
//     console.log(`movement ${i + 1} : ${mov} deposited`);
//   } else {
//     console.log(`movement ${i + 1} : ${Math.abs(mov)} withdrawn`);
//   }
// }

// console.log("-------FOREACH-----");

// movements.forEach((mov, i, arr) => {
//   if (mov > 0) {
//     console.log(`movement ${i + 1} : ${mov} deposited`);
//   } else {
//     console.log(`movement ${i + 1} : ${Math.abs(mov)} withdrawn`);
//   }
// });
// console.log("-------map------");

// const mapedMovement = movements.map((mov, i) => {
//   return `movement ${i + 1} : ${Math.abs(mov)} ${mov > 0 ? "deposited" : "withdrew"} `;
// });

// console.log(mapedMovement);

// const name = "Tunde salami onileola";

// const createUserName = (name) => {
//   const userName = name
//     .toLowerCase()
//     .split(" ")
//     .map((name) => name[0])
//     .join("");
//   return userName;
// };
// console.log(createUserName(name));

// const depositedMov = movements.filter((mov) => {
//   return mov > 0;
// });
// console.log(depositedMov);

// const withdrewMov = movements.filter((mov) => {
//   return mov < 0;
// });
// console.log(withdrewMov);

// const balance = movements.reduce((acc, cur, i, arr) => {
//   return acc + cur;
// }, 0);
// console.log(balance);

// const max = movements.reduce((acc, mov) => {
//   return acc > mov ? acc : mov;
// }, movements.at(0));
// console.log(max);

// const urls = ["a", "b", "c"];

// async function run() {
//   urls.forEach(async (url) => {
//     await new Promise((r) => setTimeout(r, 10));
//     console.log(url);
//   });
//   console.log("done");
// }

// run();

// const words = ["apple", "banana", "apple", "cherry", "banana", "apple"];

// const counts = words.reduce((acc, word) => {
//   console.log(acc);

//   acc[word] = (acc[word] || 0) + 1;
//   return acc;
// }, {});

// console.log(counts);

//const movements = [4000, -3000, 7000, -4000, 20000, -300, 7300, -5000];
// movements.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else {
//     return 1;
//   }
// });

// const groupedMovement = Object.groupBy(movements, (mov) =>
//   mov > 0 ? "deposited" : "withdrawals",
// );
// console.log(groupedMovement);

// console.log(movements);
// //====================
// const orders = [
//   { id: 1, item: "pen", price: 2, qty: 3 },
//   { id: 2, item: "book", price: 15, qty: 1 },
//   { id: 3, item: "pen", price: 2, qty: 5 },
//   { id: 4, item: "bag", price: 20, qty: 2 },
// ];

// const total = orders
//   .filter((o) => o.item === "pen")
//   .map((o) => o.price * o.qty)
//   .reduce((sum, cost) => sum + cost, 0);

// console.log(total);

// //====================

// const arr = [1, 2, NaN, 4];

// console.log(arr.indexOf(NaN));
// console.log(arr.includes(NaN));

// //=====================

// const ar = [1, , 3]; // note the empty slot
// console.log(ar.length);

// console.log(ar.map((x) => x * 2));
// console.log(ar.forEach((x) => console.log("visited:", x)));

// const arr2 = [1, 2, 3, 4, 5];

// arr2.forEach((num, index) => {
//   if (num === 3) {
//     arr2.splice(index, 1);
//   }
// });

// console.log(arr2);
const utils = (acc) => {
  return acc.flatMap((acc) => acc.movements)
  .filter((mov) => mov < 0)
  .reduce((acc, cur) => acc + cur, 0);
}

const totalDepositedMovement = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalDepositedMovement);


const totalWithdrawalMovement = utils(accounts);
console.log(totalWithdrawalMovement);


