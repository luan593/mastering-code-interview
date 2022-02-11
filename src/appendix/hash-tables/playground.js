'use strict';

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  _hash(key) {
    let total = 0;
    for (let i = 0; i < str.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    let index = this._hash(key)
    if (!this.table[index]) {
      this.table[index] = new Map();
    }
    this.table[index].set(key, value);
    return `${key} -> ${this.table[index].get(key)}`;
  }

  get(key) {
    let index = this._hash(key);
    if (this.table[index] && this.hasKey(key)) {
      return `${key} -> ${this.table[index].get(key)}`;
    }
  }

  hasKey(key) {
    let index = this._hash(key);
    if (this.table[index]) {
      return this.table[index].has(key);
    }
    return false;
  }
}