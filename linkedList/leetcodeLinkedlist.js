class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var MyLinkedList = function () {
    this.head = null;
}

MyLinkedList.prototype.get = function (index) {
    if (index < 0 || !this.head) {
        return -1;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
        if (!current.next) {
            return -1;
        }
        current = current.next;
    }
    return current.val;
}

MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
}

MyLinkedList.prototype.addAtTail = function (val) {
    const newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
        return;
    }
    let current = this.head;
    while (current.next) {
        current = current.next;
    }
    current.next = newNode;
}

MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0) {
        this.addAtHead(val);
        return;
    }
    const newNode = new Node(val);
    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        return;
    }

    let current = this.head;
    let count = 0;
    let prev = null;

    while (count < index && current) {
        prev = current;
        current = current.next;
        count++;
    }

    if (count < index) {
        console.log("Index out of bound");
        return;
    }

    prev.next = newNode;
    newNode.next = current;
}


// Create an instance of MyLinkedList
const linkedList = new MyLinkedList();

// Test adding elements
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);

// Test getting elements
console.log(linkedList.get(0)); // Output: 1
console.log(linkedList.get(1)); // Output: 2
console.log(linkedList.get(2)); // Output: 3