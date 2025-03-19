class ArrayV2 {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(data) {
    this.data[this.length] = data;
    this.length += 1;
  }

  pop() {
    delete this.data[this.length - 1];
    this.length -= 1;
  }

  delete(index) {
    delete this.data[index];

    for (let i = index; i < this.length - 1; i += 1) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];

    this.length -= 1;
  }

  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => {
        if (i < this.length) return { value: this.data[i++], done: false };
        return { value: null, done: true };
      },
    };
  }
}

const arr1 = new ArrayV2();
arr1.push('a');
arr1.push('b');
arr1.push('c');
arr1.push('d');

console.log('Array Created', arr1);
console.log('arr1.get(2)', arr1.get(2));

arr1.pop();

console.log('arr1.pop()', arr1);

arr1.push('d');

console.log(`arr1.push('d')`, arr1);

arr1.delete(1);

console.log('arr1.delete(1)', arr1);

for (const i of arr1) {
  console.log(i);
}
