import { createLinkedList } from "./index";

describe("insertTail()", () => {
  test("should return head if linked list is empty", () => {
    const constNumberLinkedList = createLinkedList();
    const head = constNumberLinkedList.insertTail(5);
    expect(head).toEqual({ data: 5, next: null });
  });
  test("should return correct head if linked list is exist", () => {
    const constNumberLinkedList = createLinkedList();
    constNumberLinkedList.insertTail(1);
    constNumberLinkedList.insertTail(2);
    constNumberLinkedList.insertTail(3);
    constNumberLinkedList.insertTail(4);
    const head = constNumberLinkedList.insertTail(5);
    expect(head).toEqual({
      data: 1,
      next: {
        data: 2,
        next: { data: 3, next: { data: 4, next: { data: 5, next: null } } },
      },
    });
  });
});

describe("insertBeforePosition()", () => {
  test("should return undefined if parameters invalid", () => {
    const constNumberLinkedList = createLinkedList();
    const headV1 = constNumberLinkedList.insertBeforePosition();
    const headV2 = constNumberLinkedList.insertBeforePosition(3);
    expect(headV1).toBeUndefined();
    expect(headV2).toBeUndefined();
  });

  test("should insert head if position <= 0", () => {
    const constNumberLinkedList = createLinkedList();
    constNumberLinkedList.insertTail(3);
    const headV1 = constNumberLinkedList.insertBeforePosition(1, 0);
    expect(headV1).toEqual({ data: 1, next: { data: 3, next: null } });
  });

  test("should insert tail if position >= size", () => {
    const constNumberLinkedList = createLinkedList();
    constNumberLinkedList.insertTail(1);
    const head = constNumberLinkedList.insertBeforePosition(2, 3);
    expect(head).toEqual({ data: 1, next: { data: 2, next: null } });
  });

  test("should insert before postition if 0 <= position <= size", () => {
    const constNumberLinkedList = createLinkedList();
    constNumberLinkedList.insertTail(1);
    constNumberLinkedList.insertTail(2);
    constNumberLinkedList.insertTail(3);
    constNumberLinkedList.insertTail(5);
    const head = constNumberLinkedList.insertBeforePosition(4, 3);
    expect(head).toEqual({
      data: 1,
      next: {
        data: 2,
        next: { data: 3, next: { data: 4, next: { data: 5, next: null } } },
      },
    });
  });
});

describe("removeAtPosition()", () => {
  test("should return undefined if parameters invalid", () => {
    const constNumberLinkedList = createLinkedList();
    constNumberLinkedList.insertHead(1);
    const head = constNumberLinkedList.removeAtPosition();
    expect(head).toEqual({ data: 1, next: null });
  });

  test("should remove head if position <= 0", () => {
    const constNumberLinkedList = createLinkedList();
    constNumberLinkedList.insertTail(1);
    constNumberLinkedList.insertTail(2);
    const head = constNumberLinkedList.removeAtPosition(-1);
    expect(head).toEqual({ data: 2, next: null });
  });

  test("should remove tail if position >= size", () => {
    const constNumberLinkedList = createLinkedList();
    constNumberLinkedList.insertTail(1);
    constNumberLinkedList.insertTail(2);
    constNumberLinkedList.insertTail(3);
    const head = constNumberLinkedList.removeAtPosition(3);
    expect(head).toEqual({ data: 1, next: { data: 2, next: null } });
  });

  test("should remove at postition if 0 <= position <= size", () => {
    const constNumberLinkedList = createLinkedList();
    constNumberLinkedList.insertTail(1);
    constNumberLinkedList.insertTail(2);
    constNumberLinkedList.insertTail(3);
    constNumberLinkedList.insertTail(4);
    constNumberLinkedList.insertTail(5);
    const head = constNumberLinkedList.removeAtPosition(4);
    expect(head).toEqual({
      data: 1,
      next: {
        data: 2,
        next: { data: 3, next: { data: 4, next: null } },
      },
    });
  });
});

describe("some()", () => {
  test("should return false if parameters invalid", () => {
    const constNumberLinkedList = createLinkedList();
    constNumberLinkedList.insertHead(1);
    const head = constNumberLinkedList.some();
    expect(head).toBe(false);
  });

  test("should return false if all item invalid condition", () => {
    const constNumberLinkedList = createLinkedList();
    constNumberLinkedList.insertHead(1);
    constNumberLinkedList.insertHead(3);
    constNumberLinkedList.insertHead(5);
    const head = constNumberLinkedList.some((item) => item % 2 === 0);
    expect(head).toBe(false);
  });

  test("should return true if just one / some item valid condition", () => {
    const constNumberLinkedList = createLinkedList();
    constNumberLinkedList.insertHead(1);
    constNumberLinkedList.insertHead(2);
    constNumberLinkedList.insertHead(3);
    constNumberLinkedList.insertHead(4);
    const head = constNumberLinkedList.some((item) => item % 2 === 1);
    expect(head).toBe(true);
  });
});
