import { findMostFrequentNumber } from "./index";

describe("findMostFrequentNumber()", () => {
  test("should return undefined if empty", () => {
    expect(findMostFrequentNumber()).toBe(undefined);
    expect(findMostFrequentNumber([])).toBe(undefined);
  });

  test("should return correct most frequent number", () => {
    expect(findMostFrequentNumber([1])).toBe(1);
    expect(findMostFrequentNumber([1, 2])).toBe(1);
    expect(findMostFrequentNumber([1, 2, 2])).toBe(2);
    expect(findMostFrequentNumber([1, 2, 2, 3, 4, 4, 4, 5])).toBe(4);
  });
});
