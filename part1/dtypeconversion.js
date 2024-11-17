// in case of null it shows the o/p as null, 0, object

score = "33abc";
// score = "2222";
let numm = score;
let num = Number(score);

console.log(num); // as a number // if we use strings in it , it will give Nan(not a number)

console.log(numm); // as a string

let bool = 1;
let boolvalue = Boolean(bool); // here Boolean datatype is used to give o/p in true/false
console.log(boolvalue);

//****************Prefix & Postfix***************/

let x = 5;
console.log(++x);
console.log(x);
console.log(x++);
console.log(x);

let y = 3;
console.log(--y);
console.log(y);
console.log(y--);
console.log(y);
