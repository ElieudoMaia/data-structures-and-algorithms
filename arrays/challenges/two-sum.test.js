import { describe, it } from 'node:test';
import assert from 'node:assert';

import { twoSum } from './two-sum.js';

describe('TwoSum', () => {
  it('should return the indices of the two numbers such that they add up to a specific target', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];
    const result = twoSum(nums, target);
    assert.deepEqual(result, expected);
  });

  it('should return an empty array if no two numbers add up to the target', () => {
    const nums = [1, 2, 3];
    const target = 6;
    const expected = [];
    const result = twoSum(nums, target);
    assert.deepEqual(result, expected);
  });

  it('should handle negative numbers', () => {
    const nums = [-1, -2, -3, -4, -5];
    const target = -8;
    const expected = [2, 4];
    const result = twoSum(nums, target);
    assert.deepEqual(result, expected);
  });

  it('should handle duplicate numbers', () => {
    const nums = [3, 3, 4, 5];
    const target = 6;
    const expected = [0, 1];
    const result = twoSum(nums, target);
    assert.deepEqual(result, expected);
  });

  it('should return the first pair of indices that add up to the target', () => {
    const nums = [1, 2, 3, 4, 5];
    const target = 5;
    const expected = [1, 2];
    const result = twoSum(nums, target);
    assert.deepEqual(result, expected);
  });

  it('should return the indices in the correct order', () => {
    const nums = [1, 2, 3, 4, 5];
    const target = 6;
    const expected = [1, 3];
    const result = twoSum(nums, target);
    assert.deepEqual(result, expected);
  });
});
