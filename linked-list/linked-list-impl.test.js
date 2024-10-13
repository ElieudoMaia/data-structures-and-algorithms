import { describe, it } from 'node:test';
import assert from 'node:assert';
import { LinkedList } from './linked-list-impl.js';

describe('LinkedList', () => {
  it('should create a new LinkedList', () => {
    const list = new LinkedList(10);
    assert.equal(list.head.value, 10);
    assert.equal(list.head.next, null);
    assert.equal(list.tail, list.head);
    assert.equal(list.length, 1);
  });

  it('should append a new Node to the LinkedList', () => {
    const list = new LinkedList(10);
    list.append(20);
    assert.equal(list.head.value, 10);
    assert.equal(list.head.next.value, 20);
    assert.equal(list.tail.value, 20);
    assert.equal(list.length, 2);
  });

  it('should append two new Nodes to the LinkedList', () => {
    const list = new LinkedList(10);
    list.append(20);
    list.append(30);
    assert.equal(list.head.value, 10);
    assert.equal(list.head.next.value, 20);
    assert.equal(list.head.next.next.value, 30);
    assert.equal(list.tail.value, 30);
    assert.equal(list.length, 3);
  });

  it('should prepend a new Node to the LinkedList', () => {
    const list = new LinkedList(10);
    list.prepend(5);
    assert.equal(list.head.value, 5);
    assert.equal(list.head.next.value, 10);
    assert.equal(list.tail.value, 10);
    assert.equal(list.length, 2);
  });

  it('should prepend two new Nodes to the LinkedList', () => {
    const list = new LinkedList(10);
    list.prepend(5);
    list.prepend(0);
    assert.equal(list.head.value, 0);
    assert.equal(list.head.next.value, 5);
    assert.equal(list.head.next.next.value, 10);
    assert.equal(list.tail.value, 10);
    assert.equal(list.length, 3);
  });

  it('should insert a new Node at the specified index', () => {
    const list = new LinkedList(10);
    list.append(20);
    list.append(30);
    list.insert(1, 15);
    assert.equal(list.head.value, 10);
    assert.equal(list.head.next.value, 15);
    assert.equal(list.head.next.next.value, 20);
    assert.equal(list.head.next.next.next.value, 30);
    assert.equal(list.tail.value, 30);
    assert.equal(list.length, 4);
  });

  it('should insert a new Node at the start of the LinkedList', () => {
    const list = new LinkedList(10);
    list.append(20);
    list.append(30);
    list.insert(0, 5);
    assert.equal(list.head.value, 5);
    assert.equal(list.head.next.value, 10);
    assert.equal(list.head.next.next.value, 20);
    assert.equal(list.head.next.next.next.value, 30);
    assert.equal(list.tail.value, 30);
    assert.equal(list.length, 4);
  });

  it('should insert a new Node at the end of the LinkedList', () => {
    const list = new LinkedList(10);
    list.append(20);
    list.append(30);
    list.insert(2, 35);
    assert.equal(list.head.value, 10);
    assert.equal(list.head.next.value, 20);
    assert.equal(list.head.next.next.value, 30);
    assert.equal(list.head.next.next.next.value, 35);
    assert.equal(list.tail.value, 35);
    assert.equal(list.length, 4);
  });

  it('should throw an error when trying to insert a Node at an index out of bounds', () => {
    const list = new LinkedList(10);
    list.append(20);
    list.append(30);
    assert.throws(() => list.insert(3, 40), Error, 'Index out of bounds');
    assert.throws(() => list.insert(-1, 40), Error, 'Index out of bounds');
  });

  it('should remove a Node at the specified index', () => {
    const list = new LinkedList(10);
    list.append(20);
    list.append(30);
    list.remove(1);
    assert.equal(list.head.value, 10);
    assert.equal(list.head.next.value, 30);
    assert.equal(list.tail.value, 30);
    assert.equal(list.length, 2);
  });

  it('should remove the first Node in the LinkedList and ', () => {
    const list = new LinkedList(10);
    list.append(20);
    list.append(30);
    list.remove(0);
    assert.equal(list.head.value, 20);
    assert.equal(list.tail.value, 30);
    assert.equal(list.length, 2);
  });

  it('should remove the last Node in the LinkedList', () => {
    const list = new LinkedList(10);
    list.append(20);
    list.append(30);
    list.remove(2);
    assert.equal(list.head.value, 10);
    assert.equal(list.tail.value, 20);
    assert.equal(list.length, 2);
  });

  it('should throw an error when trying to remove a Node at an index out of bounds', () => {
    const list = new LinkedList(10);
    list.append(20);
    list.append(30);
    assert.throws(() => list.remove(3), Error, 'Index out of bounds');
    assert.throws(() => list.remove(-1), Error, 'Index out of bounds');
  });

  it('should throw an error when trying to remove the root Node', () => {
    const list = new LinkedList(10);
    assert.throws(() => list.remove(0), Error, 'Cannot remove root Node');
  });
});
