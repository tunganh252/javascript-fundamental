import { total, stringConcat } from "../lab-reduce";

describe("Cal sum", () => {
  test("should use func total with param is Array<number> ---> sum all number in array", () => {
    expect(total([3, -5, 7])).toBe(5);
  });
});

describe("Concat string from array", () => {
  test("should use func stringConcat with param is Array ---> concat all value in array", () => {
    expect(stringConcat(["234", 888, "Hello"])).toBe("234888Hello");
  });
});
