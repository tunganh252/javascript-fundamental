/**
 *
 * @param {Array} arr
 */
export function findMostFrequentNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let statistics = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    statistics[num] = statistics[num] === undefined ? 1 : statistics[num] + 1;
  }

  let maxKey = undefined;
  for (const key in statistics) {
    if (maxKey === undefined || statistics[key] > statistics[maxKey]) {
      maxKey = key;
    }
  }
  return Number(maxKey);
}

console.log(findMostFrequentNumber([1]));
console.log(findMostFrequentNumber([1, 2]));
console.log(findMostFrequentNumber([1, 2, 2]));
console.log(findMostFrequentNumber([1, 2, 2, 3, 4, 4, 4, 5]));
