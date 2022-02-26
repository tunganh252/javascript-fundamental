import { createQueue } from "./index";

describe("createQueue()", () => {
  test("all in one", () => {
    const queue = createQueue();

    // empty queue
    expect(queue.getSize()).toBe(0);
    expect(queue.getFront()).toBe(undefined);
    expect(queue.getBack()).toBe(undefined);
    expect(queue.isEmpty()).toBe(true);

    // enqueue 1
    queue.enqueue(1);
    expect(queue.getSize()).toBe(1);
    expect(queue.getFront()).toBe(1);
    expect(queue.getBack()).toBe(1);
    expect(queue.isEmpty()).toBe(false);

    // enqueue 5
    queue.enqueue(5);
    expect(queue.getSize()).toBe(2);
    expect(queue.getFront()).toBe(5);
    expect(queue.getBack()).toBe(1);
    expect(queue.isEmpty()).toBe(false);

    // dequeue
    const dataDequeue = queue.dequeue();
    expect(dataDequeue).toBe(1);
    expect(queue.getSize()).toBe(1);
    expect(queue.getFront()).toBe(5);
    expect(queue.getBack()).toBe(5);
    expect(queue.isEmpty()).toBe(false);
  });
});
