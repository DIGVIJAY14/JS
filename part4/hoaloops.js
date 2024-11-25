// HIGH ORDER ARRAY LOOPS

// In this loop no need of condition and increment/decrement needed

// for of loop

const arr = [1, 2, 3, 4, 5];
for (const element of arr) {
  console.log(element);
}

const str = "good morning!!";
for (const inner of str) {
  console.log(inner);
}

// Maps
// map-objects are collection of key value pairs..no duplicate values in it and have unique values
// map is not iterable

const map = new Map();
map.set("a", "1");
map.set("b", "2");
map.set("c", "2");
map.set("a", "1"); // not print coz it provide only unique values
console.log(map);

for (const keyy of map) {
  // it prints both key and value
  console.log(keyy);
}

for (const [i, j] of map) {
  console.log(`${i}:- ${j}`);
}

// Object loop  (for in loop)

const obj = {
  1: "js",
  2: "c++",
  3: "python",
  4: "java",
};

for (const element in obj) {
  console.log(element); // key
  console.log(obj[element]); //value
  console.log(`${element} key and ${obj[element]} values`);
}

// arrays keys ((index)start from zero)  --- loop (for in)

const ary = ["aa", "bb", "cc", "dd"];
for (const keyy in ary) {
  console.log(keyy); // shows all index no of an array
  console.log(keyy, ary[keyy], ary); // show all elements or keys of array
}

// for each loop

const aqs = ["q1", "q2", "q3", "q4"]; // call back function, that's why we don't put name of a function
aqs.forEach((anypara) => {
  console.log(anypara);
});

const aq = ["val1", "val2", "val3", "val4"]; // arrow function
aq.forEach((anypara) => {
  console.log(anypara);
});

aqs.forEach((any, indexx, ary) => {
  // forEach provide elements, index value and complete array
  console.log(any, indexx, ary);
});

// forEach -- array nd object

const coding = [
  {
    id: 1,
    val: "A",
  },
  {
    id: 2,
    val: "B",
  },
  {
    id: 1,
    val: "C",
  },
];

coding.forEach((para) => {
  console.table([para.id, para.val]);
});

// not be able to store it in a new variable , it doesn't return value, as it's not compulsory that we print all values present in array .. that's why we use filter ..in nxt file..

// KEY POINTS...

// for...in: Iterates over keys (indexes) of an array or object.
// for...of: Iterates over values in an array or iterable.
// forEach: Executes a callback for each array element (cannot break/continue).

// Objects are not iterable by map looping

// for..of vs forEach

//for...of: Works on arrays and other iterables (like strings, Maps, Sets)

//forEach: Works only on arrays and requires a callback function
