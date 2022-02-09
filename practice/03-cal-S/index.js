// Bài 3: Tính S(n) = 1 + 1/2 + 1/3 + … + 1/n

/**
 *
 * @param {number} n
 */
export function calculateSum(n) {
  if (n <= 0) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / i;
  }
  return sum;
}

console.log(calculateSum(1));
