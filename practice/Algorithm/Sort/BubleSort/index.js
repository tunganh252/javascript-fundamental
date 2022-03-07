function bubleSort(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  for (let i = numberList.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numberList[j] > numberList[j + 1]) {
        // swaap j and j + 1
        const temp = numberList[j];
        numberList[j] = numberList[j + 1];
        numberList[j + 1] = temp;

        // [x, y] = [y, x]
        [numberList[j + 1], numberList[j]] = [numberList[j], numberList[j + 1]];
      }
    }
  }

  return numberList;
}

console.log(bubleSort([2, 456, 9, 7, 82, 46, 3, 12, 6, 55, 52, 29, 98]));
