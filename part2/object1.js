const obj = {
  Name: "DIGVIJAY",
  DOB: "14 - 12 - 2002",
  Age: 22,
};

console.log(obj.Name);
console.log(obj["DOB"]); // other method

// how to use Symbol
const sym = Symbol(); // this () is just for description

const user = {
  Name: "DIGVIJAY",
  DOB: "14 - 12 - 2002",
  Age: 22,
  [sym]: 1234, // use square brackets for symbol otherwise it work as string
};
console.log(user[sym]); // no need of double quotes in symbol
// to overwrite something use equal to (=)

user.Name = "DV"; // overwrite name
console.log(user.Name);

// // to lock or freeze object

// Object.freeze(user);    // to freeze
user.Name = "DC";
console.log(user.Name);
console.log(user); // updation in object
// add functions in objects

const queue = {
  Namee: "DV",
  cde: "aws",
  fgh: true,
};

console.log(queue);

queue.fun = function () {
  console.log("hello everyone");
  console.log(`Hii ${this.Namee}`); // this keyword is used to know what element we want to print
};
console.log(queue.fun()); // function(anonymous)
