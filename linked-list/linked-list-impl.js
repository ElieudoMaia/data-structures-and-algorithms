class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor(value) {
    this.head = new Node(value, null);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newTail = new Node(value, null);
    this.tail.next = newTail;
    this.tail = newTail;
    this.length += 1;
    return this;
  }

  prepend(value) {
    const newHead = new Node(value, this.head);
    this.head = newHead;
    this.length += 1;
    return this;
  }

  insert(index, value) {
    const isIndexOutOfBounds = index < 0 || index >= this.length;
    if (isIndexOutOfBounds) throw new Error('Index out of bounds');

    if (index === 0) return this.prepend(value);
    if (index === this.length - 1) return this.append(value);

    let currentNode = this.head;
    let i = 0;

    while (i !== index - 1) {
      currentNode = currentNode.next;
      i += 1;
    }

    const newNode = new Node(value, currentNode.next);
    currentNode.next = newNode;
    this.length += 1;

    return this;
  }

  remove(index) {
    const isIndexOutOfBounds = index < 0 || index >= this.length;
    if (isIndexOutOfBounds) throw new Error('Index out of bounds');

    if (this.length === 1) {
      throw new Error('Cannot remove root Node');
    }

    if (index === 0) {
      this.head = this.head.next;
      this.length -= 1;
      return this;
    }

    let currentNode = this.head;
    let i = 0;

    while (i !== index - 1) {
      currentNode = currentNode.next;
      i += 1;
    }

    if (index === this.length - 1) {
      this.tail = currentNode;
    }

    currentNode.next = currentNode.next.next;
    this.length -= 1;
    return this;
  }
}
