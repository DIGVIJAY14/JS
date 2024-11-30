const one = {
  name: "sam",
  age: 22,
};
const two = {
  email: "abc@gmail.com",
  __proto__: one, // to access other variable objects
};
const three = {
  status: "active",
  __proto__: one,
};

console.log(two.name); // method one
const check = Object.setPrototypeOf(two, three); //method two ()
console.log(check);
const checks = Object.setPrototypeOf(three, one); //method two ()  // not working properly
console.log(checks);
