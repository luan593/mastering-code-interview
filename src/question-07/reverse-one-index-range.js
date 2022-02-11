'use strict';

class Node {
  constructor(value=null, next=null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  
  constructor() {
    this.head = null;
    this._length;
  }

  append(value) {
    let node = new Node(value);
    if (this.head) {
      let current = this.head;
      while(current.next) {
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

  reverse(m, n) {
    if (m < 1 || n > this._length) { 
      return this.representation();
    }
    let mMinusOne = m - 1; 
    let head = this.head;
    let position = 1;
    let currentNode = head;

    let i = 1;
    
    return this.representation();
  }

  representation() {
    let print = 'head >';
    let current = this.head;
    while (current) {
      print += `${this.value} ->`;
    }
    print += ' null';
    return print;
  }
}