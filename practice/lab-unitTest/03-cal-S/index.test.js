import { calculateSum } from "./";

// Bài 3: Tính S(n) = 1 + 1/2 + 1/3 + … + 1/n

describe("Bài 3: Tính S(n) = 1 + 1/2 + 1/3 + … + 1/n", () => {
  test("should return 0 when n <= 0", () => {
    expect(calculateSum(0)).toBe(0);
    expect(calculateSum(-1)).toBe(0);
    expect(calculateSum(-10)).toBe(0);
  });

  test("should return Sum when n > 0", () => {
    expect(calculateSum(1)).toBe(1);
    expect(calculateSum(2)).toBe(1.5);
    expect(calculateSum(3)).toBe(1.8333333333333333);
  });
});
