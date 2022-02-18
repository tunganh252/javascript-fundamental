import { findAllNumber } from "./index";

// input: Array<number> --> return Array<number> with first number is odd
// [123, 246, 688] --> [123]

describe("findAllNumber()", () => {
  test("should return empty array if list is empty", () => {
    expect(findAllNumber([])).toEqual([]);
    expect(findAllNumber({})).toEqual([]);
    expect(findAllNumber("")).toEqual([]);
    expect(findAllNumber(true)).toEqual([]);
    expect(findAllNumber(false)).toEqual([]);
    expect(findAllNumber()).toEqual([]);
  });
  test("should return empty array if list has no odd digit", () => {
    expect(findAllNumber([246, 688])).toEqual([]);
  });
  test("should return correct array if list has odd digit", () => {
    expect(findAllNumber([5, 134, 246, 688])).toEqual([5, 134]);
  });
});
