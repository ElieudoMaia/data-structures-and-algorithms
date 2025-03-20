import assert from 'node:assert';
import { describe, it } from 'node:test';
import { mergeSortedArrays } from './merge-sorted-arrays.js';

describe('reverse string', () => {
  it('should return sorted merged arrays', () => {
    const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
    assert.deepStrictEqual(result, [0, 3, 4, 4, 6, 30, 31]);
  });
});
