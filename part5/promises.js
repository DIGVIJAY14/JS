/*   ------ PROMISES

A Promise in JavaScript is a way to handle asynchronous tasks (like fetching data from an API) that may not finish immediately.

Key Points:
Pending: The task is not yet done.
Resolved/fulfilled: The task completed successfully.
Rejected: The task failed.

A Promise is a way to handle tasks that take time, and it lets you deal with success or failure later.

*/

const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promise 1 complete");
    resolve();
  }, 1000); // in milliseconds
});

p1.then(function () {
  // resolve is connected to then..
  console.log("connected");
});

// another method

//promise 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promise 2 complete");
    resolve();
  }, 1000);
}).then(function () {
  // resolve is connected to then..
  console.log("connected again");
});

//promise 3
const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ promise: 3, status: "completed" });
  }, 1000);
});

promise3.then(function (parameter) {
  console.log(parameter);
});

//promise 4
const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ promise4: "perfectly working", p41: "promise4" });
    } else {
      reject("ERROR ! SOMETHING WENT WRONG ");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.p41;
  }) // *chaining method* return value of above is printed in below then
  .then((chainn) => {
    console.log(chainn);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    // it either resolves or rejected but it always run..
    console.log("finally resolved or rejected");
  });

// We pass parameter and argument in then and catch which connects the resolve and reject..

// async await ******--------

const asw = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ promise5: "hey", p41: "promise5" });
    } else {
      reject("ERROR ! SOMETHING WENT WRONG ");
    }
  }, 1000);
});

async function namee() {
  try {
    const response = await asw;
    console.log(response.p41);
  } catch (err) {
    console.log(err);
  }
}

namee();

// to get data by this

// by async..await

async function data() {
  try {
    const response = await fetch(
      "https://api.github.com/users/hiteshchoudhary"
    );
    const convert = await response.json(); // to convet it into json it takes time that's why we use await here also..o/w it shows Promise {<pending>}
    console.log(convert);
  } catch {
    console.log("error");
  }
}
data();

// by then and catch

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((val) => {
    return val.json();
  })
  .then((huge) => {
    console.log(huge);
  })
  .catch((errorr) => {
    console.log("E :", errorr);
  });
