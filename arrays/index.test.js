import { describe, it } from 'node:test';
import { ArrayV2 } from './index.js';
import assert from 'node:assert';

describe('ArrayV2', () => {
  it('should create a new instance of ArrayV2', () => {
    const arr1 = new ArrayV2();
    assert.strictEqual(arr1.length, 0);
    assert.deepStrictEqual(arr1.data, {});
  });

  it('should push elements to the array', () => {
    const arr1 = new ArrayV2();
    arr1.push('a');
    arr1.push('b');
    arr1.push('c');
    assert.strictEqual(arr1.length, 3);
    assert.deepStrictEqual(arr1.data, { 0: 'a', 1: 'b', 2: 'c' });
  });

  it('should pop the last element from the array', () => {
    const arr1 = new ArrayV2();
    arr1.push('a');
    arr1.push('b');
    arr1.push('c');
    arr1.pop();
    assert.strictEqual(arr1.length, 2);
    assert.deepStrictEqual(arr1.data, { 0: 'a', 1: 'b' });
  });

  it('should delete an element from the array', () => {
    const arr1 = new ArrayV2();
    arr1.push('a');
    arr1.push('b');
    arr1.push('c');
    arr1.delete(1);
    assert.strictEqual(arr1.length, 2);
    assert.deepStrictEqual(arr1.data, { 0: 'a', 1: 'c' });
  });

  it('should iterate over the array', () => {
    const arr1 = new ArrayV2();
    arr1.push('a');
    arr1.push('b');
    arr1.push('c');
    const result = [];
    for (const item of arr1) {
      result.push(item);
    }
    assert.deepStrictEqual(result, ['a', 'b', 'c']);
  });

  it('should get an element by index', () => {
    const arr1 = new ArrayV2();
    arr1.push('a');
    arr1.push('b');
    arr1.push('c');
    assert.strictEqual(arr1.get(1), 'b');
  });

  it('should return undefined for an out-of-bounds index', () => {
    const arr1 = new ArrayV2();
    arr1.push('a');
    arr1.push('b');
    arr1.push('c');
    assert.strictEqual(arr1.get(3), undefined);
  });

  it('should return undefined for a negative index', () => {
    const arr1 = new ArrayV2();
    arr1.push('a');
    arr1.push('b');
    arr1.push('c');
    assert.strictEqual(arr1.get(-1), undefined);
  });

  it('should return undefined for a non-integer index', () => {
    const arr1 = new ArrayV2();
    arr1.push('a');
    arr1.push('b');
    arr1.push('c');
    assert.strictEqual(arr1.get(1.5), undefined);
  });
});
