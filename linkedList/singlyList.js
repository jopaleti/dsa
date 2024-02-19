class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a new node to the end of the list
    append(data) {
        const newNode = new Node(data);

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

    // Insert a newNode at a specific location
    insertAt(position, data) {
        const newNode = new Node(data);
        
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let count = 0;
        let prev = null;

        while (count < position && current) {
            prev = current;
            current = current.next;
            count++;
        }

        if (count < position) {
            console.log("Position out of bounds");
            return;
        }

        prev.next = newNode;
        newNode.next = current;
    }
    // Display the element of the linkedlist
    display() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log("Initial Linked List:");
linkedList.display();

linkedList.insertAt(1, 4);

console.log("\nLinked List after insertion:");
linkedList.display();