function fibonacciLoop(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;
  let next = 1;
  let i = 2;

  while (i <= n) {
    next = curr + prev;

    // move forward
    i++;
    prev = curr;
    curr = next;
  }

  return next;
}

/**
 * fibo(4) + fibo(3)
 * (fibo(3) + fibo(2)) + (fibo(2) + fibo(1))
 * ((fibo(2) + fibo(1)) + (fibo(1) + fibo(0))) + ((fibo(1) + fibo(0)) + (fibo(0) + fibo(-1)))
 * (((fibo(1) + fibo(0)) + (fibo(1) + fibo(-1))) + (fibo(1) + fibo(0))) + ((fibo(1) + fibo(0)) + (fibo(0) + fibo(-1)))
 * (((1 + 0) + (1 + 1)) + (1 + 0)) + ((1 + 0) + (0 + 0))
 * 5
 */
function fibonacciRecursion(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

console.log(fibonacciRecursion(40));
console.log(fibonacciLoop(40));

describe("test fibonacci function", () => {
  test("should return correct fibonacci number", () => {
    [0, 1, 1, 2, 3, 5, 8, 13].forEach((result, n) => {
      expect(fibonacciLoop(n)).toBe(result);
    });
  });

  test("should return correct fibonacci number", () => {
    [0, 1, 1, 2, 3, 5, 8, 13].forEach((result, n) => {
      expect(fibonacciRecursion(n)).toBe(result);
    });
  });
});
