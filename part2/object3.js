// DE-STRUCTURING OF OBJECTS (reduce object.property syntax)

const des = {
  id: 2,
  keyandvalue1234: 4,
  key: 1,
};

const { keyandvalue1234: kv, id, key } = des; // syntax of destructure, here, keyandvalue1234: kv means to call it with a short name and gave same o/p
console.log(des);
console.log(kv);
