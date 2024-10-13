import { describe, it } from 'node:test';
import assert from 'node:assert';
import { DoublyLinkedList } from './doubly-linked-list.js';

describe('DoublyLinkedList', () => {
  it('should create a new instance of DoublyLinkedList', () => {
    const list = new DoublyLinkedList(10);
    assert.strictEqual(list.head.value, 10);
    assert.strictEqual(list.tail.value, 10);
    assert.strictEqual(list.length, 1);
  });

  it('should append a new node to the list', () => {
    const list = new DoublyLinkedList(10);
    list.append(20);
    assert.strictEqual(list.head.value, 10);
    assert.strictEqual(list.tail.value, 20);
    assert.strictEqual(list.head.next.value, 20);
    assert.strictEqual(list.tail.prev.value, 10);
    assert.strictEqual(list.length, 2);
  });

  it('should append multiple nodes to the list', () => {
    const list = new DoublyLinkedList(10);
    list.append(20).append(30).append(40);
    assert.strictEqual(list.head.value, 10);
    assert.strictEqual(list.tail.value, 40);
    assert.strictEqual(list.head.next.value, 20);
    assert.strictEqual(list.tail.prev.value, 30);
    assert.strictEqual(list.length, 4);
  });

  it('should prepend a new node to the list', () => {
    const list = new DoublyLinkedList(10);
    list.prepend(5);
    assert.strictEqual(list.head.value, 5);
    assert.strictEqual(list.tail.value, 10);
    assert.strictEqual(list.head.next.value, 10);
    assert.strictEqual(list.tail.prev.value, 5);
    assert.strictEqual(list.length, 2);
  });

  it('should prepend multiple nodes to the list', () => {
    const list = new DoublyLinkedList(10);
    list.prepend(5).prepend(0).prepend(-5);
    assert.strictEqual(list.head.value, -5);
    assert.strictEqual(list.tail.value, 10);
    assert.strictEqual(list.head.next.value, 0);
    assert.strictEqual(list.tail.prev.value, 5);
    assert.strictEqual(list.length, 4);
  });

  it('should insert a new node at the specified index', () => {
    const list = new DoublyLinkedList(10);
    list.append(20).append(30).append(40);
    list.insert(2, 25);
    assert.strictEqual(list.head.value, 10);
    assert.strictEqual(list.tail.value, 40);
    assert.strictEqual(list.head.next.value, 20);
    assert.strictEqual(list.tail.prev.value, 30);
    assert.strictEqual(list.head.next.next.value, 25);
    assert.strictEqual(list.head.next.next.next.value, 30);
    assert.strictEqual(list.length, 5);
  });

  it('should throw an error when inserting at an out of bounds index', () => {
    const list = new DoublyLinkedList(10);
    list.append(20).append(30).append(40);
    assert.throws(() => list.insert(5, 50), Error);
  });

  it('should insert a new node at the beginning of the list', () => {
    const list = new DoublyLinkedList(10);
    list.append(20).append(30).append(40);
    list.insert(0, 5);
    assert.strictEqual(list.head.value, 5);
    assert.strictEqual(list.tail.value, 40);
    assert.strictEqual(list.head.next.value, 10);
    assert.strictEqual(list.tail.prev.value, 30);
    assert.strictEqual(list.length, 5);
  });

  it('should insert a new node at the end of the list', () => {
    const list = new DoublyLinkedList(10);
    list.append(20).append(30).append(40);
    list.insert(3, 35);
    assert.strictEqual(list.head.value, 10);
    assert.strictEqual(list.tail.value, 40);
    assert.strictEqual(list.head.next.value, 20);
    assert.strictEqual(list.tail.prev.value, 35);
    assert.strictEqual(list.length, 5);
  });

  it('should remove a node from the list', () => {
    const list = new DoublyLinkedList(10);
    list.append(20).append(30).append(40);
    list.remove(2);
    assert.strictEqual(list.head.value, 10);
    assert.strictEqual(list.tail.value, 40);
    assert.strictEqual(list.head.next.value, 20);
    assert.strictEqual(list.tail.prev.value, 20);
    assert.strictEqual(list.length, 3);
  });

  it('should throw an error when removing from an out of bounds index', () => {
    const list = new DoublyLinkedList(10);
    list.append(20).append(30).append(40);
    assert.throws(() => list.remove(5), Error);
  });

  it('should remove the head node from the list', () => {
    const list = new DoublyLinkedList(10);
    list.append(20).append(30).append(40);
    list.remove(0);
    assert.strictEqual(list.head.value, 20);
    assert.strictEqual(list.tail.value, 40);
    assert.strictEqual(list.head.prev, null);
    assert.strictEqual(list.tail.prev.value, 30);
    assert.strictEqual(list.length, 3);
  });

  it('should remove the tail node from the list', () => {
    const list = new DoublyLinkedList(10);
    list.append(20).append(30).append(40);
    list.remove(3);
    assert.strictEqual(list.head.value, 10);
    assert.strictEqual(list.tail.value, 30);
    assert.strictEqual(list.head.next.value, 20);
    assert.strictEqual(list.tail.next, null);
    assert.strictEqual(list.length, 3);
  });

  it('should throw if trying to remove the head from an empty list', () => {
    const list = new DoublyLinkedList(10);
    assert.throws(() => list.remove(0), Error, 'Cannot remove root Node');
  });
});
