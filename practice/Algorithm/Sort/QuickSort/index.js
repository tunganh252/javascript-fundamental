function partition(numberList, left, right) {
  console.log("partition: ", numberList.slice(left, right + 1));

  const mid = left + Math.trunc((right - left) / 2); // 1
  const pivot = numberList[mid]; // 2

  let i = left; // 1
  let j = right; // 2

  while (i <= j) {
    // find the first item greater than pivot
    while (numberList[i] < pivot) i++;

    // find the first item smaller than pivot
    while (numberList[j] > pivot) j--;

    if (i < j) {
      // const temp = numberList[i];
      // numberList[j] = numberList[i];
      // numberList[i] = temp;

      [numberList[i], numberList[j]] = [numberList[j], numberList[i]];
    }

    if (i <= j) {
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(numberList, left, right) {
  console.log("quick sort: ", numberList.slice(left, right + 1));
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  // base case --> termination point
  if (left >= right) return numberList;

  const pivotPosition = partition(numberList, left, right);

  quickSort(numberList, left, pivotPosition - 1);
  quickSort(numberList, pivotPosition, right);

  return numberList;
}
const arrTest = [4, 2, 34, 36, 5, 60, 2, 24, 5, 33, 4];
console.log(quickSort(arrTest, 0, arrTest.length - 1));
