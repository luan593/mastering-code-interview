'use strict';

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  append(data) {
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
    }
    else {
      this.head = node;
    }
    this._length++;
    return this._length;
  }

  inserAt(index, data) {
    let node = new Node(data);
    if (index === 0) {
      let aux = this.head;
      node.next = aux;
      this.head = node;
    }
    else if (this.head) {
      let prev;
      let current = this.head;
      let i = 0;
      while (i < index && i < this._length) {
         prev = current;
         current = current.next;
         i++;
      }
      node.next = current;
      prev.next = node;
    }
    else {
      this.head = node;
    }
    this._length++;
    return this._length;
  }

  remove() {
    let deleted;
    if (this.head) {
      let current = this.head;
      let prev;
      while (current.next) {
        prev = current;
        current = current.next;
      }
      deleted = current.value;
      if (prev !== undefined) {
        prev.next = null;
        current = null;
      }
      else {
        this.head = null;
      } 
      this._length--;
    }
    return deleted;
  }

  removeAt(index) {
    let deleted;
    if (this.head && index <= this._length - 1) {
      let current = this.head;
      let prev;
      let i = 0;
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      if (prev !== undefined) prev.next = current.next;
      if (i === 0) this.head = current.next;
      deleted = current.value;
      current = null;
      this._length--;
    }
    return deleted;
  }

  clear() {
    this.head = null;
    this._length = 0;
  }

  search(data) {
    if (this.head) {
      let current = this.head;
      let index = 0;
      while (current.value !== data && current.next) {
        current = current.next;
        index++;
      }
      return current.value === data ? index : null;
    }
    return null;
  }

  getAt(index) {
    let value;
    if (this.head && index <= this._length - 1) {
      let current = this.head;
      let i = 0;
      while (i < index) {
        current = current.next;
        i++;
      }
      value = current.value;
    }
    return value;
  }

  // reverse() {
  //   if (this.head) {
  //     let current = this.head;
  //     let prev = null;
  //     while (current.next) {
  //       let aux = current.next;
  //       current.next = prev;
  //       prev = current;
  //       current = aux;
  //     }
  //     current.next = prev;
  //     this.head = current;
  //   }
  //   console.log(this.print());
  // }

  reverse() {
    if (this.head && this.head.next) {
      let current = this.head;
      let prev = null;
      while (current) {
        let aux = current.next;
        current.next = prev;
        prev = current;
        current = aux;
      }
      this.head = prev;
    }
    console.log(this.print);
  }

  print() {
    let representation = 'head >>';
    if (this.head) {
      let current = this.head;
      while (current) {
        representation += ` ${current.value} -->`;
        current = current.next;
      }
    }
    representation += ' null';
    return representation;
  }
}