'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  add(data) {
    let node = new Node(data);
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    else {
      this.head = node;
    }
    this._length++;
    return this._length;
  }

  prepend(data) {
    let node = new Node(data);
    if (this.head) {
      let current = this.head;
      node.next = current;
      this.head = node;
      return this._length++;
    }
    else {
      this.head = node;
    }
  }

  append(data) {
    let node = new Node(data);
    if (this.head) {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    else {
      this.head = node;
    }
  }

  removeAt(index) {

  }

  // insertAt(index, data) {
  //   let node = new Node(data)
  //   if (this.head) {
      
  //   }
  //   else {
  //     this.head = node;
  //   }
  //   this._length++;
  //   return this._length;
  // }

  print() {
    let representation = 'head >>';
    if (this.head) {
      let current = this.head;
      while (current) {
        representation += ` ${current.data} -->`;
        current = current.next;
      }
    }
    representation += ' null';
    return representation;
  }
}