/**
 *
 * @param {Array} arr
 */
export function findAllPositiveSubArr(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  //   // for...in
  //   let arrResult = [];
  //   let arrTemp = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     const num = arr[i];
  //     if (num > 0 && num % 2 === 0) arrTemp.push(num);

  //     if (arrTemp.length > 0 && (num % 2 === 1 || i === arr.length - 1)) {
  //       arrResult.push(arrTemp);
  //       arrTemp = [];
  //     }
  //   }

  //   return arrResult;

  // reduce
  let arrTemp = [];
  return arr.reduce((subArrList, num, i) => {
    if (num > 0 && num % 2 === 0) arrTemp.push(num);
    if (arrTemp.length > 0 && (num % 2 === 1 || i === arr.length - 1)) {
      subArrList.push(arrTemp);
      arrTemp = [];
    }
    return subArrList;
  }, []);
}

console.log(findAllPositiveSubArr([1, 2, 4, 6, 7, 8, 10, 11, 12, 14, 16, 20]));
