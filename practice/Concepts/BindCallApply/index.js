const obj = { num: 123 };

const add = function (x, y) {
  return this.num + x + y;
};

const addTest = add.bind(obj);
console.log(addTest(1, 2));

console.log(add.apply(obj, [10, 20]));
console.log(add.call(obj, 10, 30));
