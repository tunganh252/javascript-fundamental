import { countUniqueNumbers } from "./index";

// Count array<number> and return
// [1, 2, 3, 3, 4, 5, 5] ---> return 5
describe("countUniqueNumbers()", () => {
  test("should return 0 if empty", () => {
    expect(countUniqueNumbers([])).toBe(0);
  });
  test("should return length if list is unique", () => {
    expect(countUniqueNumbers([1, 2, 3])).toBe(3);
  });
  test("should return correct count of unique numbers", () => {
    expect(countUniqueNumbers([1, 2, 2, 3, 4, 4])).toBe(4);
  });
});
