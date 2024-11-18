// to merge arrays

//(1)
const array1 = ["dv", "dk", "dc"];
const array2 = ["cr", "ck", "dc"];
const merge = array1.concat(array2); // concat to merge arrays and create new array
console.log(merge);

//(2)
const join = [...array1, ...array2]; // spread method to merge arrays
console.log(join);

//(3)  -- When we have sub-arrays
const sub = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]];
console.log(sub.flat(2));
// returns a new array with merging all sub arrays
// (spread.flat(2)), Here 2 is depth of sub arrays

console.log(Array.isArray("hey")); // questioning that is it array ?
console.log(Array.from("hey")); // to convert string into array
console.log(Array.from(["hey", "hy"])); // to convert string into array

let a = 100;
let b = "HIIII";
let c = true;
console.log(Array.of(a, b, c)); // takes vales as input to make an array
