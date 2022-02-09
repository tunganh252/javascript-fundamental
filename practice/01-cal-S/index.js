// Bài 1: Tính S(n) = 1 + 2 + 3 + … + n

/**
 * @description calculate Sum with for loop
 * @param {number} n
 */
export function calculateSum(n) {
  if (n <= 0) return 0;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
/**
 * @description calculate Sum with math recipe
 * @example S(n) = n * (n + 1) / 2
 * @param {number} n
 */
export function calculateSumV2(n) {
  if (n <= 0) return 0;
  return (n * (n + 1)) / 2;
}

console.log(calculateSum(55));
