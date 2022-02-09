import { calculateSum, calculateSumV2 } from "./index";

// Bài 2: Tính S(n) = 1^2 + 2^2 + … + n^2

describe("Tính S(n) = 1^2 + 2^2 + … + n^2", () => {
  test("should return 0 when n <= 0", () => {
    expect(calculateSum(-1)).toBe(0);
    expect(calculateSum(-2)).toBe(0);
    expect(calculateSum(0)).toBe(0);
  });

  test("should return Sum when n > 0", () => {
    expect(calculateSum(1)).toBe(1);
    expect(calculateSum(2)).toBe(5);
    expect(calculateSum(3)).toBe(14);
    expect(calculateSum(15)).toBe(1240);
    expect(calculateSum(50)).toBe(42925);
  });
});

describe("Tính S(n) = 1^2 + 2^2 + … + n^2", () => {
  test("should return 0 when n <= 0", () => {
    expect(calculateSumV2(-1)).toBe(0);
    expect(calculateSumV2(-2)).toBe(0);
    expect(calculateSumV2(0)).toBe(0);
  });

  test("should return Sum when n > 0", () => {
    expect(calculateSumV2(1)).toBe(1);
    expect(calculateSumV2(2)).toBe(5);
    expect(calculateSumV2(3)).toBe(14);
    expect(calculateSumV2(15)).toBe(1240);
    expect(calculateSumV2(50)).toBe(42925);
  });
});
