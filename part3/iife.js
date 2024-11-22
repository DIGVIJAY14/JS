// IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

//IIFE isn't prioritized or treated specially—it executes only when JavaScript reaches that line. Its "immediate" nature just means you don’t need to call it manually, unlike regular functions.

// To make the variables safe (local or block variable) from global pollution

(function iife() {
  // named IIFE(iife)
  console.log("Syntax");
})(); // syntax of iife , wrap whole function in parenthesis(function defination) nd one more parenthis(for execution) in last..

// In iife, we need to put ";" in last to end that task otherwise it gives error coz it doesn't know where to stop..

((ab) => {
  // simple iife or un-named iife
  console.log(`Another Syntax: ${ab}`);
})("dv");
