// Bài 5: Tính S(n) = 1 + 1/3 + 1/5 + … + 1/(2n + 1)

/**
 *
 * @param {number} n
 */
export function isIncreasingNumber(n) {
  if (n < 10 || n > 1e6) return false;

  const numberString = n.toString();
  for (let i = 1; i < numberString.length; i++) {
    if (numberString[i] <= numberString[i - 1]) return false;
  }
  return true;
}
export function isIncreasingNumberV2(n) {
  if (n < 10 || n > 1e6) return false;

  let remaining = n;
  let prevDegit = 10;

  while (remaining > 0) {
    const lastDigit = remaining % 10;
    if (lastDigit >= prevDegit) return false;

    prevDegit = lastDigit;

    remaining = Math.trunc(remaining / 10);
  }

  return true;
}

console.log(isIncreasingNumberV2(123456));
