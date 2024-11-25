// filter (call back function)
// it returns value nd take condition
// It filters value acc to requirement by putting conditions

const val = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const onn = val.filter((itemm) => itemm > 5);
console.log(onn);

// if we use curly braces then we have to write return to execute it
const off = val.filter((itemm) => {
  return itemm > 3;
});
console.log(off);

// example with database

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },

  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },

  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },

  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },

  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },

  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },

  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },

  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
];

let db = books.filter((data) => data.genre === "History");
console.log(db);

db = books.filter((data) => {
  return data.genre === "Fiction" && data.publish >= 1985;
});
console.log(db);

// Call back function :- A callback function is used to fetch or perform operations only when needed,

// Normal finction :- A normal function runs immediately when call...

// Map (call back function )*****

const mapp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const neww = mapp.map((data) => {
  return data + 10;
});
console.log(neww);

// Chaining method in map
/*(multiple map are able to use)
(connected with each other in multiple map)
*/

const chain = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const go = chain
  .map((uni) => {
    return uni * 10;
  })
  .map((un) => {
    //(connected with each other in multiple map, also when we paas different parameters in map or filter)
    return un + 1;
  })
  .filter((fil) => fil >= 71); // also use filter in it
console.log(go);

//map() vs filter()

// m- Transforms each element of an array.
// f- Filters elements based on a condition.
// m- Returns a new array of the same length.
// f- Returns a new array with fewer or equal elements.
// m- Used for modifying data.
// f- Used for selecting specific data.

// reduce (call back function)
/* (accumulator + current value , initial value) */

const num = [1, 2, 3, 4];
const redd = num.reduce((acc, crrval) => {
  console.log(`acc: ${acc} & crrval: ${crrval}`);
  return acc + crrval;
}, 0); // here 0 is initial value
console.log(redd);

/* initially the value of acc is equal to initial value
   nd then after sum there is an value updation of acc, eg:- initial value = 0 then acc = 0,,, acc + crrval = 0 +1 then acc(update) = 1*/

const shoppingcart = [
  { title: "Book One", genre: "Fiction", price: 2000 },

  { title: "Book Two", genre: "Non-Fiction", price: 1992 },

  { title: "Book Three", genre: "History", price: 1999 },

  { title: "Book Four", genre: "Non-Fiction", price: 19999 },

  { title: "Book Five", genre: "Science", price: 2009 },

  { title: "Book Six", genre: "Fiction", price: 1987 },
];

const total = shoppingcart.reduce((updt, runn) => {
  return updt + runn.price;
}, 0);
console.log(`SO, THE TOTAL PRICE IS : ${total}`);

// Why reduce ?
/*to calculate something based on the entire array (like summing values or combining objects)

*/

// NoTE.....(implicit or explicit return)

/*const square = (x) => x * x;   Implicit return for a simple expression*/

/*const square = (x) => {
    const result = x * x;
    return result;  // Explicit return with multiple statements
}*/
