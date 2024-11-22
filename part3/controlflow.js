// switch (key) {       // Syntax**** ...switch statment
//     case value:

//         break;

//     default:
//         break;
// }

const cf = 4;
switch (cf) {
  case 1:
    console.log("sun");
    break; // break - to stop execution , where we find our o/p , otherwise it will prints all below values after that o/p value..**except default value
  case 2:
    console.log("mon");
    break;
  case 3:
    console.log("tue");
    break;
  case 4:
    console.log("wed");
    break;

  default:
    console.log("not found");
    break;
}

// const values = ??? in switch or control flow

// false values --- which give the false answer
// ( false , 0, -0, BigInt (0n) , "", null, undefined, NaN)

// true values
// ("0", 'false', " ", [],{}, function(){} and all other values....)

// if empty object and arrays give positive value or true then to know if there is something in array or object , we have to check by it's length ...

const array = []; // for array
if (array.length === 0) {
  console.log("array is empty");
} else {
  console.log("not define");
}

const object = {}; // for object
if (Object.keys(object).length === 0) {
  console.log("object is empty");
} else {
  console.log("not define");
}

// on console (browser)*****

// false == 0 => true
// false == '' => true
// 0 == '' => true

// Nullish Coalescing Operator (??): null & undefined ****

// this operator is used when we have null or undefined , due to which we face issues in our program or whole project

// to overcome from this problem we assign something so, if we have null or undefined then it runs or execute second method which we placed...

let val1;
val1 = 5 ?? 10; // first value prints
console.log(val1);
val1 = null ?? 15; // first value prints after null
console.log(val1);
val1 = undefined ?? 20; // first value prints after undefined
console.log(val1);
val1 = null ?? undefined ?? 30 ?? 35 ?? 40;
console.log(val1);

// ternary operator *****

// condition ? true : false --- syntax
const price = 100;
price == 100 ? console.log("MRP") : console.log("Not for sale");
