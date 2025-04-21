export class ArrayV2 {
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
