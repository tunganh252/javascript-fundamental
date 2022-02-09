import { calculateSum, calculateSumV2 } from "./index";

// Bài 1: Tính S(n) = 1 + 2 + 3 + … + n
/**
 * Tính S(n) có các case:
 * n <= 0 ---> 0
 * n > 0 ---> Tính tổng các số
 * n = 1 --> 1
 * n = 2 --> 3
 * n = 3 --> 6 ...
 */
describe("S(n) = 1 + 2 + 3 + … + n", () => {
  test("should return 0 when n <= 0", () => {
    expect(calculateSum(0)).toBe(0);
    expect(calculateSum(-1)).toBe(0);
  });

  test("should return SUM when n > 0", () => {
    expect(calculateSum(1)).toBe(1);
    expect(calculateSum(2)).toBe(3);
    expect(calculateSum(3)).toBe(6);
    expect(calculateSum(10)).toBe(55);
    expect(calculateSum(55)).toBe(1540);
  });
});

describe("S(n) = 1 + 2 + 3 + … + n", () => {
  test("should return 0 when n <= 0", () => {
    expect(calculateSumV2(0)).toBe(0);
    expect(calculateSumV2(-1)).toBe(0);
  });

  test("should return SUM when n > 0", () => {
    expect(calculateSumV2(1)).toBe(1);
    expect(calculateSumV2(2)).toBe(3);
    expect(calculateSumV2(3)).toBe(6);
    expect(calculateSumV2(10)).toBe(55);
    expect(calculateSumV2(55)).toBe(1540);
  });
});
