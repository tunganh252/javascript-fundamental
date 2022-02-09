import { classifyStudentV3 } from "../lab-unitTest";

describe("classifyStudentV3()", () => {
  test("should return invalid mark when pass invalid number", () => {
    const value = classifyStudentV3(-1);
    expect(value).toBe("Invalid mark");
  });
  test("should return invalid mark when pass number > 10", () => {
    const value = classifyStudentV3(11);
    expect(value).toBe("Invalid mark");
  });
  test("should return Excellence mark when number in [8 --> <= 10]", () => {
    [8, 9, 10].forEach((n) => {
      expect(classifyStudentV3(n)).toBe("Excellence");
    });
  });
  test("should return Good mark when number in [7 --> < 8]", () => {
    const value = classifyStudentV3(7.125);
    expect(value).toBe("Good");
  });
  test("should return Not Good mark when number in [5 --> < 7]", () => {
    const value = classifyStudentV3(6.5);
    expect(value).toBe("Not Good");
  });
  test("should return Bad mark when number in [< 5]", () => {
    [1, 2, 3, 4].forEach((n) => {
      expect(classifyStudentV3(n)).toBe("Bad");
    });
  });
});
