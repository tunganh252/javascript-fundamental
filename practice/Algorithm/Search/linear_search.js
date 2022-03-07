function linearSearch(numberList, target) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number === target) return i;
  }

  return -1;
}

console.log(linearSearch([1, 2, 4, 6, 10, 12, 15, 21, 27, 35, 39, 46, 48], 10));
