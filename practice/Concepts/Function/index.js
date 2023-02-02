/**
 * Test Rest parameter
 */
function sum1(name, ...numberList) {
  // rest
  // rest
  let sum = 0;
  console.log(arguments);
  // for (let i = 0; i < arguments.length; i++) {
  //   sum += arguments[i];
  // }

  const convertArgumentsToArray = [...arguments]; // spred
  console.log(convertArgumentsToArray.slice(0, 3));
  console.log(Array.from(arguments).slice(0, 3));

  console.log("ES6 prefer: ", name, numberList);

  return numberList.reduce((total, number) => {
    total += number;
    return total;
  }, 0);
}

console.log(sum1("Tung Anh", 1)); // 1
console.log(sum1("Tung Anh", 1, 2)); // 3
console.log(sum1("Tung Anh", 1, 2, 3)); // 6

const arr = [2, 4, 6];
console.log(sum1(...arr)); // spread

// ================================
// ================================
// ================================

/**
 * Test curry function / Higher Order Function (HOF)
 */
function sum(x) {
  return function (y) {
    return x + y;
  };
}

console.log(sum(1)(2));
