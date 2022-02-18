// input: Array<number> --> return Array<number> with first number is odd
// [123, 246, 688] --> [123]

function getFirstDigit(number) {
  const unsignedNumber = Math.abs(number);
  const firstDigit = unsignedNumber.toString().charAt(0);
  return Number.parseInt(firstDigit);
}

/**
 *
 * @param {Array} numberList
 */
export function findAllNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  // // for...in
  // let filteredList = [];
  // for (let i = 0; i < numberList.length; i++) {
  //   const number = numberList[i];
  //   if (getFirstDigit(number) % 2 !== 0) filteredList.push(number);
  // }
  // return filteredList;

  // filter
  return numberList.filter((number) => getFirstDigit(number) % 2 !== 0);
}
console.log(findAllNumber([5, 124, 246, 688]));
