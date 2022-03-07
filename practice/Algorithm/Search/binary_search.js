/**
 *
 * @param {Array} numberList
 * @param {number} target
 * @returns {number} index
 */
function binarySearch(numberList, target) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;

  let left = 0;
  let right = numberList.length - 1;

  while (left <= right) {
    const mid = left + Math.trunc((right - left) / 2);
    if (numberList[mid] === target) return mid;
    if (numberList[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7));

/**
 *
 * @description use recursion to setup logic and assume numberList is a sorted array
 * @param {Array} numberList
 * @param {number} target
 * @param {number} left
 * @param {number} right
 * @returns {number} index
 */

function binarySearchWithRecursion(numberList, target, left, right) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;

  // base case - termination point (required for recursion)
  if (right < left) return -1;

  const mid = left + Math.trunc((right - left) / 2);
  if (numberList[mid] === target) return mid;

  // search on the right path if target is greater than mid
  if (target > numberList[mid]) {
    return binarySearch(numberList, target, mid + 1, right);
  }

  // ortherwise, try to search on the left path if target is less than mid
  if (target < numberList[mid]) {
    return binarySearch(numberList, target, left, mid - 1);
  }
}
const arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(arrTest, 3, 0, arrTest.length - 1));
