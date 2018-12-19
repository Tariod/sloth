'use strict';

class BinaryHeap {
  constructor(array, isMax) {
    this.maxHeap = isMax;
    this.data = array;
    isMax ? this.buildMaxHeap() : this.buildMinHeap();
  }

  left(index) {
    return 2 * index + 1;
  }

  right(index) {
    return 2 * index + 2;
  }

  parent(index) {
    return parseInt((index - 1) / 2);
  }

  add(element) {
    this.data.push(element);
    this.maxHeap ? this.isMaxHeap(this.data.length - 1) :
      this.isMinHeap(this.data.length - 1);
  }

  isMaxHeap(index) {
    const parentIndex = this.parent(index);
    if (parentIndex >= 0 && this.data[index] > this.data[parentIndex]) {
      const temp = this.data[index];
      this.data[index] = this.data[parentIndex];
      this.data[parentIndex] = temp;
      this.isMaxHeap(parentIndex);
    }
  }

  isMinHeap(index) {
    const parentIndex = this.parent(index);
    if (this.data[index] < this.data[parentIndex]) {
      const temp = this.data[index];
      this.data[index] = this.data[parentIndex];
      this.data[parentIndex] = temp;
      this.isMinHeap(parentIndex);
    }
  }

  reverseHeap() {
    this.maxHeap = !this.maxHeap;
    this.maxHeap ? this.buildMaxHeap(this.data) :
      this.buildMinHeap(this.data);
  }

  deleteByIndex(index) {
    this.data[index] = this.data[this.data.length - 1];
    this.data.length = this.data.length - 1;
    if (this.maxHeap) {
      this.isMaxHeap(index);
      this.deleteByIndexMax(index);
    } else {
      this.isMinHeap(index);
      this.deleteByIndexMin(index);
    }
  }

  deleteByIndexMax(index) {
    const l = this.left(index);
    const r = this.right(index);
    if (l < this.data.length) {

      if (r < this.data.length) {

        if (this.data[index] < this.data[l] ||
            this.data[index] < this.data[r]) {
          let curr;
          if (this.data[l] > this.data[r]) {
            curr = l;
          } else {
            curr = r;
          }

          const temp = this.data[index];
          this.data[index] = this.data[curr];
          this.data[curr] = temp;
          this.deleteByIndexMax(curr);
        }

      } else if (this.data[index] < this.data[l]) {
        const temp = this.data[index];
        this.data[index] = this.data[l];
        this.data[l] = temp;
        this.deleteByIndexMax(l);
      }
    }
  }

  deleteByIndexMin(index) {
    const l = this.left(index);
    const r = this.right(index);
    if (l < this.data.length) {

      if (r < this.data.length) {

        if (this.data[index] > this.data[l] ||
            this.data[index] > this.data[r]) {
          let curr;
          if (this.data[l] < this.data[r]) {
            curr = l;
          } else {
            curr = r;
          }

          const temp = this.data[index];
          this.data[index] = this.data[curr];
          this.data[curr] = temp;
          this.deleteByIndexMin(curr);
        }

      } else if (this.data[index] > this.data[l]) {
        const temp = this.data[index];
        this.data[index] = this.data[l];
        this.data[l] = temp;
        this.deleteByIndexMin(l);
      }

    }
  }

  maxHeapify(index) {
    const l = this.left(index);
    const r = this.right(index);
    let largest;

    if (l < this.data.length && this.data[l] > this.data[index]) {
      largest = l;
    } else {
      largest = index;
    }

    if (r < this.data.length && this.data[r] > this.data[largest]) {
      largest = r;
    }

    if (largest !== index) {
      const temp = this.data[index];
      this.data[index] = this.data[largest];
      this.data[largest] = temp;
      this.maxHeapify(largest);
    }
  }

  buildMaxHeap() {
    const end = parseInt(this.data.length / 2) - 1;
    for (let j = 0; j <= end; j++) {
      this.maxHeapify(end - j);
    }
  }

  minHeapify(index) {
    const l = this.left(index);
    const r = this.right(index);
    let least;

    if (l < this.data.length && this.data[l] < this.data[index]) {
      least = l;
    } else {
      least = index;
    }

    if (r < this.data.length && this.data[r] < this.data[least]) {
      least = r;
    }

    if (least !== index) {
      const temp = this.data[index];
      this.data[index] = this.data[least];
      this.data[least] = temp;
      this.minHeapify(least);
    }
  }

  buildMinHeap() {
    const end = parseInt(this.data.length / 2) - 1;
    for (let j = 0; j <= end; j++) {
      this.minHeapify(end - j);
    }
  }

}

module.exports = { BinaryHeap };
