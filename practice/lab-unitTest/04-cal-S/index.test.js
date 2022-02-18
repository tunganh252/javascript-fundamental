import { calculateSum } from "./";

// Bài 4: Tính S(n) = ½ + ¼ + … + 1/2n

describe("S(n) = ½ + ¼ + … + 1/2n", () => {
  test("should return 0 when n <= 0", () => {
    expect(calculateSum(-1)).toBe(0);
    expect(calculateSum(0)).toBe(0);
  });

  test("should return Sum when n > 0", () => {
    expect(calculateSum(1)).toBe(0.5);
    expect(calculateSum(2)).toBe(0.75);
  });
});
