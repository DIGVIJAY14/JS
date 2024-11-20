// function with array
function fun(...num) {
  // (rest method)
  // to print all values present in argument
  return num;
}

console.log(fun(100, 200, 300));

function joy(val1, val2, ...bool) {
  return bool;
}

console.log(joy(400, 500, 600, 700, 800));
//here val1 = 400 and val2 = 500 automatically

// function with objects

const obj = {
  name: "dv",
  age: 22,
};

function works(anyinfo) {
  console.log(`Username is : ${anyinfo.name} and age is : ${anyinfo.age}`);
}

works(obj);

// function with arrays

const arrays = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function checks(parameter) {
  return parameter[4];
}

console.log(checks(arrays));

// Scope(local/block and global) & mini hoisting --- in notes*
