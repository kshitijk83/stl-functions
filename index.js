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

export class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

export default class Stack {
  constructor() {
    this._top = null;
    this._length = 0;
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    const node = new Node(item);
    node.prev = this._top;
    this._top = node;
    this._length++;
    return this._length;
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    const node = this._top;
    this._top = node.prev;
    node.prev = null;
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
    return this.isEmpty() ? undefined : this._top.value;
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    return this._length;
  }
}
