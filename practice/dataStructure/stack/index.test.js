import { createStack } from "./index";

describe("createStack()", () => {
  test("all in one", () => {
    const stack = createStack();

    // empty stack
    expect(stack.getSize()).toBe(0);
    expect(stack.getTop()).toBe(undefined);
    expect(stack.isEmpty()).toBe(true);

    // push 1
    stack.push(1);
    expect(stack.getSize()).toBe(1);
    expect(stack.getTop()).toBe(1);
    expect(stack.isEmpty()).toBe(false);

    // push 5
    stack.push(5);
    expect(stack.getSize()).toBe(2);
    expect(stack.getTop()).toBe(5);
    expect(stack.isEmpty()).toBe(false);

    // pop
    const dataAfterPop = stack.pop();
    expect(dataAfterPop).toBe(5);
    expect(stack.getSize()).toBe(1);
    expect(stack.getTop()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
  });
});
