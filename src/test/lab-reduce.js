/**
 * Turn an array of numbers into a total of all the numbers
 * @param {Array} arr
 */
export function total(arr) {
  // your code here
  return arr.reduce((sum, value) => sum + value, 0);
}

console.log("Bài 1: ", total([1, 2, 3]));

/**
 * Turn an array of numbers into a long string of all those numbers.
 * @param {Array} arr
 */
export function stringConcat(arr) {
  return arr.reduce((string, value) => (string += value), "");
}

console.log("bài 2:", stringConcat([1, 2, 3, 5, 7, 8, 9, 14])); // "123"

/**
 * Turn an array of voter objects into a count of how many people voted
 * @param {Array} arr
 */
function totalVotes(arr) {
  return arr.reduce((countAll, value) => {
    if (value.voted) countAll += 1;
    return countAll;
  }, 0);
}

const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
console.log("Bài 3: ", totalVotes(voters)); // 7

/**
 * Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
 * @param {Array} arr
 */
function shoppingSpree(arr) {
  return arr.reduce((sumPrice, item) => (sumPrice += item.price), 0);
}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log("Bài 4: ", shoppingSpree(wishlist)); // 227005

/**
 * Given an array of arrays, flatten them into a single array
 * @param {Array} arr
 */
function flatten(arr) {
  // your code here
  return arr.reduce((newArray, item) => newArray.concat(item), []);
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log("Bài 5: ", flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

/**
 * @description Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.
 * @param {Array} arr
 * @returns Given an array of potential voters, return an object representing the results of the vote
 */
function voterResults(arr) {
  return arr.reduce(
    (objVote, item) => {
      if (item.age >= 18 && item.age <= 25) {
        objVote.numYoungPeople += 1;
        if (item.voted) objVote.numYoungVotes += 1;
      }
      if (item.age >= 26 && item.age <= 35) {
        objVote.numMidsPeople += 1;
        if (item.voted) objVote.numMidVotesPeople += 1;
      }
      if (item.age >= 36 && item.age <= 55) {
        objVote.numOldsPeople += 1;
        if (item.voted) objVote.numOldVotesPeople += 1;
      }

      return objVote;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );
}

var peopleVoters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

console.log("Bài 6: ", voterResults(peopleVoters)); // Returned value shown below:
/*
  { numYoungVotes: 1,
    numYoungPeople: 4,
    numMidVotesPeople: 3,
    numMidsPeople: 4,
    numOldVotesPeople: 3,
    numOldsPeople: 4 
  }
  */

/**
 *
 * @param {Array} arr
 * @param {Function} callbackFn
 * @param {any} initialValue
 */
function reduceTest(arr, callbackFn, initialValue) {
  if (!Array.isArray(arr) || typeof callbackFn !== "function")
    throw new Error("Invalid parameters");

  if (arr.length === 0) {
    if (initialValue === undefined)
      throw new Error("Should have initialValue when arr is empty");

    return initialValue;
  }
  const hasInitialValue = initialValue !== undefined;
  const startIndex = hasInitialValue ? 0 : 1;
  let accumulator = initialValue !== undefined ? initialValue : arr[0];

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callbackFn(accumulator, arr[i], i);
  }

  return accumulator;
}

console.log(
  "Bài: 7 ",
  reduceTest([3, 4, 5, 8, 9], (sum, value) => (sum += value))
);

console.log(
  "Bài: 7.1 ",
  reduceTest(
    peopleVoters,
    (objVote, item) => {
      if (item.age >= 18 && item.age <= 25) {
        objVote.numYoungPeople += 1;
        if (item.voted) objVote.numYoungVotes += 1;
      }
      if (item.age >= 26 && item.age <= 35) {
        objVote.numMidsPeople += 1;
        if (item.voted) objVote.numMidVotesPeople += 1;
      }
      if (item.age >= 36 && item.age <= 55) {
        objVote.numOldsPeople += 1;
        if (item.voted) objVote.numOldVotesPeople += 1;
      }

      return objVote;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  )
);

/**
 *
 * @param {Array} arr
 * @returns data array reverse
 */
function ReverseTest(arr = []) {
  return arr.reduce(
    (newArray, value) => (newArray.unshift(value), newArray),
    []
  );
}
console.log("Bài 8: ", ReverseTest([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

/**
 *
 * @param {Array} arr
 * @returns data array reverse
 */
function mergeMapandFilterTest(arr = []) {
  return arr.reduce(
    (newArray, value) => (value * 2 > 5 ? [...newArray, value * 2] : newArray),
    []
  );
}
console.log("Bài 9: ", mergeMapandFilterTest([1, 2, 3, 4, 5])); // [6, 8, 10]
