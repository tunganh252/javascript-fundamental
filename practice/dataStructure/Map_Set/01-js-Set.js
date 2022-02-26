/**
 *
 * @param {Array} numberList
 */
function uniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  const uniqueNumbersSet = new Set(numberList);
  return Array.from(uniqueNumbersSet);
  //   return [...uniqueNumbersSet];
}
