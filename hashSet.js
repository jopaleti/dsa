// Description: Implement a hash set with the following methods:
// Impleting Basic Set Operations

class MyHashSet {
  constructor() {
    this.set = new Set();
  }
  add(value) {
    this.set.add(value);
    return this.set;
  }
  remove(value) {
    this.set.delete(value);
    return this.set;
  }
  contains(value) {
    return this.set.has(value);
  }

  // Functiton union of set
  union(setA, setB) {
    let __union = new Set(setA);
    for (const elem of setB) {
      __union.add(elem);
    }
    return __union;
  }

  // Function intersection of set
  intersection(setA, setB) {
    let __intersection = new Set();
    for (const elem of setB) {
      if (setA.has(elem)) {
        __intersection.add(elem);
      }
    }
    return __intersection;
  }

  // Function difference of set
  difference(setA, setB) {
    const __difference = new Set(setA);
    for (const elem of setB) {
      __difference.delete(elem);
    }
    return __difference;
  }

  // Function symmetric difference of set
  symmetricDifference(setA, setB) {
    const __difference = new Set(setA);
    for (const elem of setB) {
      if (__difference.has(elem)) {
        __difference.delete(elem);
      } else {
        __difference.add(elem);
      }
    }
    return __difference;
  }

  // Function Check Subset
  subset(setA, val) {
    return setA.has(val);
  }
}

// Test Samples
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

const newSet = new MyHashSet();
console.log(newSet.add(1)); // set = [1]
console.log(newSet.contains(1)); // true
console.log(newSet.intersection(setA, setB)); // set = [2, 3]
console.log(newSet.subset(setB, 3)); // true
