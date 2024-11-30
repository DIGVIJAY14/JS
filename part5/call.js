function one(user) {
  this.user = user;
}

function tne(user, age, mail) {
  one.call(this, user);
  this.age = age;
  this.mail = mail;
}

const bucket = new tne("dv", "22", "dv@gmail.com");
console.log(bucket);
