// DATE....................................
let date = new Date();
console.log(date);
// different methods to view date & time
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date); // object

// more formats

let date1 = new Date(2023, 0, 12); // it starts month from 0 (array)
console.log(date1.toString());

let date2 = new Date(2024, 12, 14, 13, 35, 23); //array
console.log(date2.toLocaleString());

let date3 = new Date("2023-12-14"); // in this format month start from 01
// use any format (mm-dd-yy) / (yy-mm-dd)
console.log(date3.toLocaleString());

// TIME......................................

let time = Date.now(); // since january 1, 1970
console.log(time); // by default in milliseconds
console.log(date3.getTime()); // to get that duraion's time
console.log(Math.floor(time / 1000)); // to convert in seconds

let particular_info = new Date();
console.log(particular_info.getMonth() + 1); // for particular information-- from zero
console.log(particular_info.getDay()); // for particular information

// Customizable format.......................

console.log(
  particular_info.toLocaleString("default", {
    weekday: "long", // ctrl + spcae for more options
  })
);
