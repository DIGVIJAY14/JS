const arr = [22, 33, 44, 55, 66]; // indexing start from 0
console.log(arr);
console.log(arr[3]); // particular index

const arr1 = new Array(1, 2, 3, 4, 5); // another method
console.log(arr1);
console.log(arr1[0]);

// array methods

const arr2 = [322, 3253, 654654, 4324];
arr2.push(6); // to add values/elements in array
arr2.push(999);
console.log(arr2);

arr2.pop(); // to remove  last element or value in array
console.log(arr2);

arr2.unshift(10000); // to add element from the beginning of array
console.log(arr2);

arr2.shift(); // to remove element from the beginning of array
console.log(arr2);

// questioning

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arr3.includes(9)); // true
console.log(arr3.includes(90)); // false

console.log(arr3.indexOf(22)); // o/p=> -1 , means does not exist
console.log(arr3.indexOf(3)); // means, index number of 3 (element) is at 2nd index
console.log(arr3.join()); // join the elements and convert it into string(datatype)

// slice and splice

const arr4 = [1, 22, 444, 5555, 66666];
console.log("A", arr4);

console.log("B", arr4.slice(0, 4)); //note (start(include),end(exclude))
console.log("C", arr4.splice(2, 3, 777, 888, 7890)); //(start,deletecount,add items....)
console.log(arr4);
