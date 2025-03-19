import assert from 'node:assert';
import { describe, it } from 'node:test';
import { reverse } from './reverse-string.js';

describe('reverse string', () => {
  it('should throw an error if no string is provided', () => {
    assert.throws(() => reverse(), Error, 'string is required');
  });

  it('should reverse the string', () => {
    const string = 'elieudo';
    const result = reverse(string);
    assert.strictEqual(result, 'odueile');
  });
});
