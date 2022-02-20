function createLinkedList() {
  let head = null;

  function getHead() {
    return head;
  }

  function getTail() {
    if (head == null) return null;
    let tail = head;
    while (tail != null) {
      tail = head.next;
    }

    return tail;
  }

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

  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };
    if (head == null) {
      head = newNode;
      // console.log("Khi chưa có head --> gán head = newNode : ", head);
      return;
    }

    // ortherwise, linked list has some items
    newNode.next = head;
    // console.log(
    //   "Khi linked list đã có item --> gán newNode.next = head : ",
    //   newNode
    // );
    head = newNode;
    // console.log("Khi linked list đã có item --> gán head = newNode : ", head);
  }

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
    findWithCallback,
    insertHead,
    printList,
  };
}

const numberLinkedList = createLinkedList();
numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.printList();

console.log("size: ", numberLinkedList.getSize());
console.log("findIndexByData: ", numberLinkedList.findIndexByData(4));

console.log(
  "findWithCallback1: ",
  numberLinkedList.findWithCallback((x) => x % 2 === 0) // 2, 4
);
console.log(
  "findWithCallback2: ",
  numberLinkedList.findWithCallback((x) => x > 5) // undefined
);
