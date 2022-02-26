export function createQueue() {
  let queue = [];

  function getBack() {
    // return queue[0];
    return queue.length > 0 ? queue[0] : undefined;
  }
  function getFront() {
    // return queue[queue.length - 1];
    return queue.length > 1 ? queue[queue.length - 1] : queue[0];
  }

  function getSize() {
    return queue.length;
  }

  function isEmpty() {
    return queue.length === 0;
  }

  function enqueue(data) {
    queue.push(data);
    return queue;
  }

  function dequeue() {
    return queue.shift();
  }

  return {
    getBack,
    getFront,
    getSize,
    isEmpty,
    enqueue,
    dequeue,
  };
}

const queue = createQueue();

queue.enqueue(1);
queue.enqueue(5);
queue.dequeue();

console.log(queue.getFront());
console.log(queue.getBack());
