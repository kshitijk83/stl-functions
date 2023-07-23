export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Adds an item to the back of the queue.
   * @param {*} item The item to be pushed onto the queue.
   * @return {number} The new length of the queue.
   */
  enqueue(item) {
    const node = new Node(item);
    if (this._head === null) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }
    this._length++;
    return this._length;
  }

  /**
   * Removes an item from the front of the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  dequeue() {
    if (this.isEmpty()) return undefined;
    const node = this._head;
    this._head = node.next;
    node.next = null;
    this._length--;
    return node.value;
  }

  /**
   * Determines if the queue is empty.
   * @return {boolean} `true` if the queue has no items, `false` otherwise.
   */
  isEmpty() {
    return this.length() === 0;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  front() {
    return this.isEmpty() ? undefined : this._head.value;
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue.
   * @return {*} The item at the back of the queue if it is not empty, `undefined` otherwise.
   */
  back() {
    return this.isEmpty() ? undefined : this._tail.value;
  }

  /**
   * Returns the number of items in the queue.
   * @return {number} The number of items in the queue.
   */
  length() {
    return this._length;
  }
}

export class Stack {
  constructor() {
    this.top = null;
    this._length = 0;
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    const newNode = new Node(item);
    newNode.next = this.top;
    this.top = newNode;
    this._length++;
    return this._length;
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    if (this.isEmpty()) return undefined;
    const node = this.top;
    this.top = node.next;
    node.next = null;
    this._length--;
    return node.value;
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    return this._length === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    return this.isEmpty() ? undefined : this.top.value;
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    return this._length;
  }
}

export class maxHeap {
  constructor() {
    this._heapArr = [];
  }
  _PARENT(arrIdx) {
    return Math.floor((arrIdx - 1) / 2);
  }
  _LEFT(parentIdx) {
    return 2 * parentIdx + 1;
  }
  _RIGHT(parentIdx) {
    return 2 * parentIdx + 2;
  }

  _heapifyTopDown(node) {
    let left = this._LEFT(node);
    let right = this._RIGHT(node);

    let largestIdx = node;
    if (left < this.size() && this._heapArr[left] > this._heapArr[largestIdx]) {
      largestIdx = left;
    }

    if (
      right < this.size() &&
      this._heapArr[right] > this._heapArr[largestIdx]
    ) {
      largestIdx = right;
    }

    if (largestIdx != node) {
      [this._heapArr[node], this._heapArr[largestIdx]] = [
        this._heapArr[largestIdx],
        this._heapArr[node],
      ];
      this._heapifyTopDown(largestIdx);
    }
  }

  _heapifyBottomUp(node) {
    let parentIdx = this._PARENT(node);
    if (node > 0 && this._heapArr[parentIdx] < this._heapArr[node]) {
      [this._heapArr[node], this._heapArr[parentIdx]] = [
        this._heapArr[parentIdx],
        this._heapArr[node],
      ];
      this._heapifyBottomUp(parentIdx);
    }
  }

  size() {
    return this._heapArr.length;
  }
  empty() {
    return this.size() === 0;
  }
  push(node) {
    this._heapArr.push(node);
    this._heapifyBottomUp(this.size() - 1);
  }
  pop() {
    if (this.size() === 0) {
      throw Error('empty heap');
    }
    const lastIdx = this.size() - 1;
    const arr = this._heapArr;
    [arr[0], arr[lastIdx]] = [arr[lastIdx], arr[0]];
    arr.pop();
    this._heapifyTopDown(0);
  }
  top() {
    if (this.size() === 0) {
      throw Error('empty heap');
    }
    return this._heapArr[0];
  }
}

(function main() {
  const pq = new maxHeap();
  const arr = [1, 4, 6, 3, 2, 1, 0, 2];
  for (let val of arr) {
    pq.push(val);
  }
  while (!pq.empty()) {
    const top = pq.top();
    pq.pop();
    console.log(top);
  }
})();
