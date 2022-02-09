// Bài 2: Tính S(n) = 1^2 + 2^2 + … + n^2

/**
 * @description Calculate Sum n with for loop
 * @param {number} n
 */
export function calculateSum(n) {
  if (n <= 0) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
}

console.log(calculateSum(50));

/**
 * @description Calculate Sum n with Math Recipe
 * @example S(n) = (n * (n + 1) * (2n + 1)) / 6
 * @param {number} n
 */
export function calculateSumV2(n) {
  if (n <= 0) return 0;
  return (n * (n + 1) * (2 * n + 1)) / 6;
}

console.log(calculateSumV2(50));
