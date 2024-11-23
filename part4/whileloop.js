// syntax different but same as for loop
// let i = 0;
// while (i <= 5) {
//   console.log(`the value is : ${i}`);
//   i = i + 2;
// }

// using array

const arr = ["x", "y", "z"];

let myarray = 0;
while (myarray <= arr.length) {
  // array indexing is equals to 'length - 1'(length of array), as indexing starts from '0' and length starts from coz it counts the number of elements in array

  // That's why if we use '<=' then one more value will print as it's length is three but in array the last index is 2, so there is no value in last , so it will print undefined..

  // For const arr = ["x", "y", "z"];:
  // Indices: 0, 1, 2
  // Number of elements: 3
  // So, arr.length is 3.

  console.log(arr.length);
  console.log(`complete array print : ${arr}`);
  console.log(`print alphabets : ${arr[myarray]}`);
  myarray = myarray + 1;
}

// DO WHILE LOOP ....*****

let val = 1;
do {
  console.log(`detected value: ${val}`);
  val++;
} while (val <= 10);

//....
let num = 11;
do {
  console.log(`only one value print ${num}`);
  num++;
} while (num <= 10);
