import { isIncreasingNumber, isIncreasingNumberV2 } from "./index";

describe("isIncreasingNumber()", () => {
  test("should return false when number < 10 || number > 1e6", () => {
    expect(isIncreasingNumber(-3)).toBe(false);
    Array.from({ length: 10 }, (x, index) => index).forEach((value) => {
      expect(isIncreasingNumber(value)).toBe(false);
    });
    expect(isIncreasingNumber(1000001)).toBe(false);
  });
  test("should return false when number right is not an increasing with number left", () => {
    [132, 232, 222, 112, 455, 12321].forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(false);
    });
  });
  test("should return true when number right is an increasing with number left", () => {
    [123, 234, 357, 123456].forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(true);
    });
  });
});

describe("isIncreasingNumberV2()", () => {
  test("should return false when number < 10 || number > 1e6", () => {
    expect(isIncreasingNumberV2(-3)).toBe(false);
    Array.from({ length: 10 }, (_, index) => index).forEach((value) => {
      expect(isIncreasingNumberV2(value)).toBe(false);
    });
    expect(isIncreasingNumberV2(1000001)).toBe(false);
  });
  test("should return false when number right is not an increasing with number left", () => {
    [132, 232, 222, 112, 455, 12321].forEach((x) => {
      expect(isIncreasingNumberV2(x)).toBe(false);
    });
  });
  test("should return true when number right is an increasing with number left", () => {
    [123, 234, 357, 123456].forEach((x) => {
      expect(isIncreasingNumberV2(x)).toBe(true);
    });
  });
});
