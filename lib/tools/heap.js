class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
    this.next = null;
  }
}

class Heap {
  constructor(array, isMax) {
    this.maxHeap = isMax;
    this.array = array;
    isMax ? this.buildMaxHeap(this.array) : this.buildMinHeap(this.array);
  }

  left(index) { return 2*index + 1 };

  right(index) { return 2*index + 2 };

  parent(index) { return parseInt( (index-1) /2) };

  add(element) {
    this.array.push(element);
    this.maxHeap ? this.isMaxHeap(this.array.length-1) :
                   this.isMinHeap(this.array.length-1);
  };

  isMaxHeap(index) {
    const parentIndex = this.parent(index);
    if (parentIndex >= 0 && this.array[index] > this.array[parentIndex]) {
      const temp = this.array[index];
      this.array[index] = this.array[parentIndex];
      this.array[parentIndex] = temp;
      this.isMaxHeap(parentIndex);
    }
  };

  isMinHeap(index) {
    const parentIndex = this.parent(index);
    if (this.array[index] < this.array[parentIndex]) {
      const temp = this.array[index];
      this.array[index] = this.array[parentIndex];
      this.array[parentIndex] = temp;
      this.isMinHeap(parentIndex);
    }
  };

  reverseHeap() {
    this.maxHeap = !this.maxHeap;
    this.maxHeap ? this.buildMaxHeap(this.array) :
                   this.buildMinHeap(this.array);
  };

  deleteByIndex(index) {
    this.array[index] = this.array[this.array.length-1];
    this.array.length = this.array.length-1;
    if (this.maxHeap) {
      this.isMaxHeap(index);
      this.deleteByIndexMax(index);
    } else {
      this.isMinHeap(index);
      this.deleteByIndexMin(index);
    };
  };

  deleteByIndexMax(index) {
    const l = this.left(index);
    const r = this.right(index);
    if (l < this.array.length) {

      if(r < this.array.length) {

        if (this.array[index] < this.array[l] || this.array[index] < this.array[r]) {
          let currVal, curr;
          if (this.array[l] > this.array[r]) {
            currVal = this.array[l];
            curr = l;
          } else {
            currVal = this.array[r];
            curr = r;
          };

          const temp = this.array[index];
          this.array[index] = this.array[curr];
          this.array[curr] = temp;
          this.deleteByIndexMax(curr);
        };

      } else {

        if (this.array[index] < this.array[l]) {
          const temp = this.array[index];
          this.array[index] = this.array[l];
          this.array[l] = temp;
          this.deleteByIndexMax(l);
        };

      };
    };
  };

  deleteByIndexMin(index) {
    const l = this.left(index);
    const r = this.right(index);
    if (l < this.array.length) {

      if (r < this.array.length) {

        if (this.array[index] > this.array[l] || this.array[index] > this.array[r]) {
          let currVal, curr;
          if (this.array[l] < this.array[r]) {
            currVal = this.array[l];
            curr = l;
          } else {
            currVal = this.array[r];
            curr = r;
          };

          const temp = this.array[index];
          this.array[index] = this.array[curr];
          this.array[curr] = temp;
          this.deleteByIndexMin(curr);
        };

      } else {

        if (this.array[index] > this.array[l]) {
          const temp = this.array[index];
          this.array[index] = this.array[l];
          this.array[l] = temp;
          this.deleteByIndexMin(l);
        };
      };

    };
  };

  maxHeapify(index) {
    const l = this.left(index);
    const r = this.right(index);
    let largest;

    if (l < this.array.length && this.array[l] > this.array[index]) {
      largest = l;
    } else {
      largest = index;
    };

    if (r < this.array.length && this.array[r] > this.array[largest]) {
      largest = r;
    };

    if (largest !== index) {
      const temp = this.array[index];
      this.array[index] = this.array[largest];
      this.array[largest] = temp;
      this.maxHeapify(largest);
    };
  };

  buildMaxHeap(arr) {
    let end = parseInt(this.array.length/2)-1;
    for(let j = 0; j <= end; j++) {
      this.maxHeapify(end-j);
    }
  };

  minHeapify(index) {
    const l = this.left(index);
    const r = this.right(index);
    let least;

    if (l < this.array.length && this.array[l] < this.array[index]) {
      least = l;
    } else {
      least = index;
    };

    if (r < this.array.length && this.array[r] < this.array[least]) {
      least = r;
    };

    if (least !== index) {
      const temp = this.array[index];
      this.array[index] = this.array[least];
      this.array[least] = temp;
      this.minHeapify(least);
    };
  };

  buildMinHeap(arr) {
    let end = parseInt(this.array.length/2)-1;
    for(let j = 0; j <= end; j++) {
      this.minHeapify(end-j);
    }
  };

}
