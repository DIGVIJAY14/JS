const game = new String("gta-vicecity"); // inspect and console
console.log(game[4]); // keys
console.log(game.length);
console.log(game.charCodeAt()); // various functios available

//*********ANOTHER SYNTAX***** */

let syntax = "hey! it's working";
let syn = "congrats 33";
console.log(`abcdefg ${syntax} hisdivdsvvoiv ${syn} `);

const x = "55";
const s = "65";
console.log(`abcdefg ${x} hisdivdsvvoiv ${s} `);

// Methods

const ns = game.substring(0, 4); // particular key length selected to print
const vs = game.slice(-8, 6); // in this we also take negative value

const trim = game.trim();
//also able to give trimStart() or trimLeft() and trimEnd() or trimRight()  ..... to remove whitespaces

const replace = "ab2d";

console.log(ns);
console.log(vs);
console.log(trim);
console.log(replace.replace("2", "c"));

console.log(replace.includes("c")); // it shows availabilty of something in boolean type..

console.log(game.split("-")); // two parameters seperator,limit ,,,, it splits the string acc to our need
