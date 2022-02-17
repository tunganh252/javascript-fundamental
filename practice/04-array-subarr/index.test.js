import { findAllPositiveSubArr } from "./index";

describe("findAllPositiveSubArr()", () => {
  test("should return empty array if empty", () => {
    expect(findAllPositiveSubArr([])).toEqual([]);
    expect(findAllPositiveSubArr({})).toEqual([]);
    expect(findAllPositiveSubArr("")).toEqual([]);
    expect(findAllPositiveSubArr()).toEqual([]);
    expect(findAllPositiveSubArr(true)).toEqual([]);
    expect(findAllPositiveSubArr(false)).toEqual([]);
    expect(findAllPositiveSubArr(undefined)).toEqual([]);
    expect(findAllPositiveSubArr(null)).toEqual([]);
  });

  test("should return empty array if no continues even sub arr", () => {
    expect(findAllPositiveSubArr([1, 3, 5, 7, 11, 19])).toEqual([]);
  });

  test("should return correct sub array if has continues even sub arr", () => {
    expect(
      findAllPositiveSubArr([1, 2, 4, 6, 7, 8, 10, 11, 12, 14, 16, 20])
    ).toEqual([
      [2, 4, 6],
      [8, 10],
      [12, 14, 16, 20],
    ]);
  });
});
