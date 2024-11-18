const singleton = new Object(); // singleton objects => one instance reused everywhere
// object literal => multiple, independent objects

// nested objects
const sng = {
  email: "dv@gmail.com",
  name: {
    firstname: "digvijay",
    midname: "singh",
    lastname: "kachhawaha",
  },
  Age: 22,
};
console.log(sng);
console.log(sng.name);
console.log(sng.Age);
console.log(sng.name.lastname);

// to combine objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = Object.assign({}, obj1, obj2); // here {} this is used make new object, in which we merge all
// {} = target and others are known as source
console.log(obj3);
obj4 = { ...obj1, ...obj2 }; // spread method same as array
console.log(obj4);

// to print keys and values in form of arrray ..

console.log(Object.keys(obj1)); // in form of array
console.log(Object.values(obj1));
console.table([Object.keys(obj2), Object.values(obj2)]);

// to make subarrays in a array [ ['1','2'], ['3','4'] ]
console.log(Object.entries(obj1));

// to check the existance property

console.log(obj2.hasOwnProperty("1"));
console.log(obj2.hasOwnProperty("3"));
