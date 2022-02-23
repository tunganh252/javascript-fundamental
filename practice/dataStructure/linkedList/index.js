export function createLinkedList() {
  let head = null;

  // Complete logic - not write unit test
  function getHead() {
    return head;
  }

  // Complete logic - not write unit test
  function getTail() {
    if (head == null) return null;
    let tail = head;
    while (tail.next != null) {
      tail = tail.next;
    }

    return tail;
  }

  // Complete logic - not write unit test
  function getSize() {
    if (head == null) return 0;

    let count = 0;
    let current = head;
    while (current != null) {
      count++;
      current = current.next;
    }

    return count;
  }

  // Complete logic - not write unit test
  function findIndexByData(data) {
    if (data == null) return -1;

    let index = 0;
    let current = head;
    while (current != null) {
      if (current.data === data) return index;
      index++;
      current = current.next;
    }
    return -1;
  }

  // Complete logic - not write unit test
  function findDataByIndex(index) {
    if (!index || head == null) return undefined;

    let i = 0;
    let current = head;
    while (current != null) {
      if (i === index) return current.data;
      i++;
      current = current.next;
    }

    return undefined;
  }

  // Complete logic - not write unit test
  function findWithCallback(callback) {
    if (!head) return undefined;

    let current = head;
    let index = 0;
    while (current != null) {
      if (callback(current.data, index)) return current.data;
      index++;
      current = current.next;
    }
    return undefined;
  }

  // Complete logic - not write unit test
  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };
    if (head == null) head = newNode;
    else {
      // ortherwise, linked list has some items
      newNode.next = head;
      head = newNode;
    }

    return head;
  }

  // Complete logic + unit test
  function insertTail(newData) {
    const newNode = {
      data: newData,
      next: null,
    };
    if (head == null) head = newNode;
    else {
      // if head is exist
      const tail = getTail();
      tail.next = newNode;
    }
    return head;
  }

  // Complete logic + unit test
  function insertBeforePosition(newData, position) {
    if (!newData || position == null) return undefined;

    if (position <= 0 || head == null) {
      insertHead(newData);
      return head;
    }

    const size = getSize();
    if (position > size) {
      insertTail(newData);
      return head;
    }

    let prev = head;
    let curr = head;
    let i = 0;

    while (i < position && curr != null) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    const newNode = {
      data: newData,
      next: curr,
    };

    prev.next = newNode;

    return head;
  }

  // Complete logic + not write unit test
  function removeHead() {
    if (head != null) head = head.next;
    return head;
  }

  // Complete logic + not write unit test
  function removeTail() {
    if (head.next == null) {
      head = null;
      return head;
    }

    let secondLast = head;
    while (secondLast.next.next != null) {
      secondLast = secondLast.next;
    }

    secondLast.next = null;
    return head;
  }

  // Complete logic + unit test
  function removeAtPosition(position) {
    if (position == null || head == null) return head;

    // if has only one item
    if (head.next == null) {
      head = null;
      return head;
    }

    // position <= 0 return remove head
    if (position <= 0) return removeHead();

    // position > size return remove tail
    const size = getSize();
    if (position >= size) return removeTail();

    // 0 < position < size ---> remove at position
    let prev = head;
    let curr = head;
    let i = 0;
    while (i < position && curr.next != null) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    prev.next = curr.next;

    return head;
  }

  // Complete logic + unit test
  function some(isValidFn) {
    if (typeof isValidFn !== "function") return false;
    if (head == null) return false;

    let curr = head;
    while (curr != null) {
      if (isValidFn(curr.data)) return true;
      curr = curr.next;
    }
    return false;
  }

  // Complete logic + unit test
  function every(isValidFn) {
    if (typeof isValidFn !== "function") return false;
    if (head == null) return false;

    let curr = head;
    while (curr != null) {
      if (!isValidFn(curr.data)) return false;
      curr = curr.next;
    }
    return true;
  }

  // Complete logic
  function printList() {
    if (head == null) return;
    let current = head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }

  return {
    getHead,
    getTail,
    getSize,
    findIndexByData,
    findDataByIndex,
    findWithCallback,
    insertHead,
    insertTail,
    insertBeforePosition,
    removeHead,
    removeTail,
    removeAtPosition,
    some,
    every,
    printList,
  };
}

const numberLinkedList = createLinkedList();

numberLinkedList.insertTail(1);
numberLinkedList.insertTail(2);
numberLinkedList.insertTail(3);
numberLinkedList.insertTail(4);
numberLinkedList.insertTail(5);
numberLinkedList.insertTail(6);
numberLinkedList.insertTail(7);
numberLinkedList.insertTail(8);
console.log(numberLinkedList.some((x) => x > 7));
console.log(numberLinkedList.every((x) => x <= 8));

numberLinkedList.printList();
