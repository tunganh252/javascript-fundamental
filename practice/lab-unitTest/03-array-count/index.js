/**
 *
 * @param {Array} listNumber
 */
export function countUniqueNumbers(listNumber) {
  if (!Array.isArray(listNumber) || listNumber.length === 0) return 0;

  // // for...in
  // let arrUnique = [];
  // for (let i = 0; i < listNumber.length; i++) {
  //   const number = listNumber[i];
  //   if (!arrUnique.includes(number)) arrUnique.push(number);
  // }
  //   return arrUnique.length;

  // reduce
  const arrUnique = listNumber.reduce((flagObj, number) => {
    flagObj[number] = true;
    return flagObj;
  }, {});

  return Object.keys(arrUnique).length;
}
