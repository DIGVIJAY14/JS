// ************************ NUMBERS ..........

const score = 10220;
console.log(score);

const balance = new Number(279); // new object shows that it's a number //** console
console.log(balance);

console.log(balance.toString().length); // converted in string

console.log(balance.toFixed(2)); // for decimal value eg- 2.00

const check = 25.56677;
console.log(check.toPrecision(4)); // precise value acc to decimal (round off)

const hun = 5000000;
console.log(hun.toLocaleString()); // to understand zeroes (put comas)
console.log(hun.toLocaleString("en-IN")); // (acc to india)

// ********************** MATH .............

console.log(Math);
console.log(Math.abs(-3)); // absolute value makes positive value
console.log(Math.round(4.332)); // round off
console.log(Math.ceil(4.332)); // top value round off eg-o/p =>5
console.log(Math.floor(4.932)); // bottom value round off eg-o/p =>4
console.log(Math.min(9, 8, 3, 4, 5, 6, 3, 3)); // show minimum value
console.log(Math.max(9, 8, 3, 4, 5, 6, 3, 3)); // show maximum value

// ******
console.log(Math.random()); // ranges between 0-1
console.log(Math.random() * 10 + 1); // to overcome the o/p of 0 we  put 1...
console.log(Math.floor(Math.random() * 10) + 1); // without decimal

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // ;ike a dice
