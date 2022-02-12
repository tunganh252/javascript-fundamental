import { hasAlice } from "./index";

// Check object in array have gender: female + name: Alice (regardless of capital or lowercase)
// [{name: "Alice", gender: "female"}] --> true

describe("hasAlice()", () => {
  test("should return false for empty array", () => {
    expect(hasAlice([])).toBe(false);
  });

  test("should return false for array doesn't have Alice", () => {
    expect(
      hasAlice([
        { id: 1, name: "Anna", gender: "female" },
        { id: 2, name: "Alice", gender: "male" },
      ])
    ).toBe(false);
  });

  test("should return true for array has Alice", () => {
    expect(
      hasAlice([
        { id: 1, name: "John", gender: "male" },
        { id: 2, name: "Alice", gender: "female" },
      ])
    ).toBe(true);
  });
});
