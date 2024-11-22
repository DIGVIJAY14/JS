// 'THIS' KEYWORD IS USED FOR CURRENT CONTEXT, (ALSO AFTER THE UPDATION)

// In node , if we print 'this' then it's value is {} empty object but in browser(console) it's value is window object that's why we are able to capture various feaures of it like click, form submit when we check it as global object

// this connects the function to its parent object, allowing access to the object's properties and methods.

const user = {
  username: "avatar",
  age: 22,

  fun: function () {
    console.log(this.username); // this, to access it from function
    // console.log(this);
  },
};

user.fun();
user.username = "sam";
console.log(user);
console.log(this);

// to print only 'this' in function , lots of values we get as o/p

const check = function () {
  console.log(this); // lots of values in o/p
};
check();
const checks = () => {
  // ARROW FUNCTION
  console.log(this); // o/p => {}
};
checks();

// see the difference between arrow funcion and function while printing 'this' ....

// implicit return -- (one line), no need of return and curly brackets

const imp = (n1, n2) => n1 * n2;
// const imp = (n1, n2) => (n1 * n2),  also used
// for objects --- const obj = () => ({ }), use parenthesis also
console.log(imp(3, 4));
console.log(() => imp(n1)); // just for syntax
