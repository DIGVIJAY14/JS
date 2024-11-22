function val(n, m) {
  let val = n + m;
  return val;
  //   return n + m;    // another method
}

// In a function, after execution of return, it doesn't execute anything..

const store = val(1, 9);
console.log("the value is :", store);

function neww(username) {
  if (!username) {
    //   (username = "dv"),  so it will ignore the if condition
    console.log("Please enter a username");
    return;
  }
  return `${username}! welcome back`;
}
// console.log(neww("DV"));
console.log(neww());
