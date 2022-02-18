function createLinkedList() {
  let head = null;

  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };
    if (head == null) {
      head = newNode;
      console.log("Khi chưa có head --> gán head = newNode : ", head);
      return;
    }

    // ortherwise, linked list has some items
    newNode.next = head;
    console.log(
      "Khi linked list đã có item --> gán newNode.next = head : ",
      newNode
    );
    head = newNode;
    console.log("Khi linked list đã có item --> gán head = newNode : ", head);
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
    insertHead,
    printList,
  };
}

const numberLinkedList = createLinkedList();
numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.printList();
