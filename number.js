//number,date and etc

console.log(23 === 23.0);

console.log(Number.parseInt("30px"));
console.log(Number.parseInt("e30px"));

console.log(Number.parseInt("2.5rem"));

console.log(Number.parseFloat("2.5rem"));
console.log(Number.parseFloat("2.5rem").toFixed(2));

//check if value is not a number
const x = 20;
console.log(Number.isNaN(x));
Number.isNaN(x)
  ? console.log("x is not a number")
  : console.log("x is a number");
console.log(Number.isFinite(x));
/// 
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};
console.log(randomInt(0, 6))



const now = new Date()
console.log(now);

console.log(Date.now());
