/**
 *
 * @param {Array} initKeyList
 * @returns
 */
function createBinarySearchTree(initKeyList) {
  let root = null;

  if (Array.isArray(initKeyList) && initKeyList.length > 0) {
    initKeyList.forEach((key) => {
      root = insert(root, key);
    });
  }

  function insert(node, key) {
    const newNode = {
      key,
      left: null,
      right: null,
    };

    if (node == null) return newNode;
    if (key === node.key) return node;

    if (key > node.key) {
      node.right = insert(node.right, key);
    } else {
      node.left = insert(node.left, key);
    }

    return node;
  }

  function findMin(node) {
    if (node == null) return null;

    let minNode = node;
    while (minNode.left != null) {
      minNode = minNode.left;
    }

    return minNode;
  }

  function search(node, key) {
    if (node == null) return key;

    if (key > node.key) return search(node.right, key);
    if (key < node.key) return search(node.left, key);

    return node;
  }

  function getMaxNodeCount(node) {
    if (node == null) return 0;

    const leftHeight = getMaxNodeCount(node.left);
    const rightHeight = getMaxNodeCount(node.right);

    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }

  function getHeight() {
    const height = getMaxNodeCount(root);
    return height > 0 ? height - 1 : 0;
  }

  function printNodesAtLevel(node, level) {
    if (node == null) return;

    if (level == 0) {
      console.log(node.key);
      return;
    }

    printNodesAtLevel(node.left, level - 1);
    printNodesAtLevel(node.right, level - 1);
  }

  // Breadth first traversal
  function bfs() {
    const height = getHeight();

    for (let i = 0; i <= height; i++) {
      printNodesAtLevel(root, i);
    }
  }

  // left - root - right
  function printInOrder(node) {
    if (node == null) return;

    printInOrder(node.left);
    console.log(node.key);
    printInOrder(node.right);
  }

  // root - left - right
  function printPreOrder(node) {
    if (node == null) return;

    console.log(node.key);
    printPreOrder(node.left);
    printPreOrder(node.right);
  }

  // left - right - root
  function printPostOrder(node) {
    if (node == null) return;

    printPostOrder(node.left);
    printPostOrder(node.right);
    console.log(node.key);
  }

  function remove(node, key) {
    if (node == null) return null;

    // find ulti we get at the node to be deleted
    if (key > node.key) {
      node.right = remove(node.right, key);
      return node;
    }

    if (key < node.key) {
      node.left = remove(node.left, key);
      return node;
    }

    // key === node.key
    // no child
    if (node.left == null && node.right == null) return null;

    // one child
    if (node.left == null) {
      node = node.right;
      return node;
    }

    if (node.right == null) {
      node = node.left;
      return node;
    }

    // two child
    const minNode = findMin(node.right);
    node.key = minNode.key;
    node.right = remove(node.right, minNode.key);

    return node;
  }

  return {
    root,
    insert,
    findMin,
    search,
    getMaxNodeCount,
    getHeight,
    bfs,
    printInOrder,
    printPreOrder,
    printPostOrder,
    remove,
  };
}

const binarySearchTree = createBinarySearchTree([
  10, 6, 3, 9, 2, 12, 11, 15, 13, 18, 16,
]);
// console.log(binarySearchTree.root);
// console.log(binarySearchTree.findMin(binarySearchTree.root, 6));
// console.log(binarySearchTree.search(binarySearchTree.root, 15));
console.log(binarySearchTree.getHeight());
// console.log(binarySearchTree.bfs());
// console.log(binarySearchTree.printInOrder(binarySearchTree.root));
// console.log(binarySearchTree.printPreOrder(binarySearchTree.root));
// console.log(binarySearchTree.printPostOrder(binarySearchTree.root));
binarySearchTree.root = binarySearchTree.remove(binarySearchTree.root, 6);
binarySearchTree.root = binarySearchTree.remove(binarySearchTree.root, 15);
binarySearchTree.root = binarySearchTree.remove(binarySearchTree.root, 10);
console.log(binarySearchTree.root);
