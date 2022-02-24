export function createStack() {
  let stack = [];

  function getTop() {
    return stack.length > 1 ? stack[stack.length - 1] : stack[0];
  }

  function getSize() {
    return stack.length;
  }

  function isEmpty() {
    return stack.length === 0;
  }

  function push(data) {
    stack.push(data);
  }

  function pop() {
    const pop = stack.pop();
    return pop;
  }
  return {
    getTop,
    getSize,
    isEmpty,
    push,
    pop,
  };
}
