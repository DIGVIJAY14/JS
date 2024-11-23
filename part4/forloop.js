// for loop/iteration

// for (let i = 0; i < 5; i++) {   -- syntax
//   const element = i;
//   console.log(element);
// }

for (let i = 0; i <= 10; i++) {
  //   const element = i;  // new variable to store value of i
  if (i == 5) {
    console.log("Here we go");
    // break;
  } else {
    console.log("error");
  }
  console.log(i);
}

// to understand looping
for (let j = 0; j <= 3; j++) {
  console.log(`Outer loop : ${j}`);
  for (let k = 0; k <= 5; k++) {
    console.log(`Inner loop : ${k}, nd Outer value : ${j}`);
  }
}

// print tables

for (let t = 1; t <= 15; t++) {
  for (let s = 1; s <= 10; s++) {
    console.log(t + "*" + s + " = " + t * s);
  }
}

// loops in array

const myarray = ["cricket", "badminton", "basketball", "VB"];
for (let index = 0; index < myarray.length; index++) {
  const element = myarray[index];
  console.log(element);
}

// break and continue

// break -- it breaks/stops the execution and comes out from loop

// continue -- it skips that condition (also skip it's printing ), nd execute the remaining code ...
