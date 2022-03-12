function createIterator(n) {
  let i = 0;

  return {
    next() {
      const result = {
        value: i,
        done: i >= n,
      };

      // increase i
      i += 1;

      return result;
    },
  };
}

const iterator = createIterator(10);

let result = iterator.next();
while (!result.done) {
  console.log(result.value);

  result = iterator.next();
}

// iterator is not iterable
// for (const number of iterator) {
//   console.log(number);
// }

function createIterable(n) {
  let i = 0;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          const result = {
            value: i,
            done: i >= n,
          };

          // increase i
          i += 1;

          return result;
        },
      };
    },
  };
}

const iteratorData = createIterable(20);

for (const number of iteratorData) {
  console.log(number);
}
