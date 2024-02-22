class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

function hasCycle(head) {
  if (!head || !head.next) {
    return false;
  }
  // Initialise two pointers
  let slow = head;
  let fast = head.next;

  // Loop through the differences differences in slow and fast pointers
  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false;
    }

    // Re-intialising the pointers
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) {
    return null;
  }
  let slow = head;
  let fast = head;

  // Determine if there's a cycle and find the meeting point
  /**
     * The function uses the "tortoise and hare" approach to detect a cycle.
    In each iteration of the while loop, slow moves one step, and fast moves two steps.
    If there is a cycle, they will eventually meet (slow === fast), and the loop breaks.
     */
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }
  // If no cycle is found return null
  if (slow != fast) {
    return null;
  }
  // Move one pointer back to the head
  slow = head;

  // Move both pointers one step at a time until they meet
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // The meeting point is the node where the cycle begins
  return slow;
};

// Test samples
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2; // Creating a cycle

console.log(hasCycle(node1)); // Output: true
