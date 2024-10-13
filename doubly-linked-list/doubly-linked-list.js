class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value, null, null);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newTail = new Node(value, null, this.tail);
    this.tail.next = newTail;
    this.tail = newTail;
    this.length++;
    return this;
  }

  prepend(value) {
    const newHead = new Node(value, this.head, null);
    this.head.prev = newHead;
    this.head = newHead;
    this.length++;
    return this;
  }

  insert(index, value) {
    const isIndexOutOfBounds = index < 0 || index >= this.length;
    if (isIndexOutOfBounds) throw new Error('Index out of bounds');

    if (index === 0) return this.prepend(value);

    const currentNode = this.#traverseToIndex(index - 1);

    const newNode = new Node(value, null, null);
    currentNode.next.prev = newNode;
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    newNode.prev = currentNode;

    this.length++;

    return this;
  }

  remove(index) {
    const isIndexOutOfBounds = index < 0 || index >= this.length;
    if (isIndexOutOfBounds) throw new Error('Index out of bounds');

    if (index === 0) return this.#removeHead();

    const currentNode = this.#traverseToIndex(index);
    currentNode.prev.next = currentNode.next;
    if (currentNode.next) {
      currentNode.next.prev = currentNode.prev;
    } else {
      this.tail = currentNode.prev;
    }

    this.length--;

    return this;
  }

  #traverseToIndex(index) {
    let currentNode = this.head;
    let i = 0;

    while (i !== index) {
      currentNode = currentNode.next;
      i += 1;
    }

    return currentNode;
  }

  #removeHead() {
    if (this.length === 1) throw new Error('Cannot remove root Node');

    this.head.next.prev = null;
    this.head = this.head.next;
    this.length -= 1;
    return this;
  }

  print() {
    const values = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode);
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }
}
