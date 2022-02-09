// Bài 4: Tính S(n) = ½ + ¼ + … + 1/2n

/**
 *
 * @param {number} n
 */
export function calculateSum(n) {
  if (n <= 0) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / (2 * i);
  }
  return sum;
}

console.log(calculateSum(40));
