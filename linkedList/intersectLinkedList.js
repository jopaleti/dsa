/**
 * Definition for singly-linkedlist
 * function ListNode(val) {
 *  this.val = val;
 *  this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function (headA, headB) {
  // Function to calculate the length of a linkedlist
  const getLength = function (node) {
    let length = 0;
    while (node) {
      node = node.next;
      length++;
    }
    return length;
  };

  // Calculate the legth of both linked Lists
  const lengthA = getLength(headA);
  const lengthB = getLength(headB);

  /**
   * Adjusting the starting point
   * Two pointers (pointerA and pointerB) are initialized to the heads of the linked lists.
   */
  let pointerA = headA;
  let pointerB = headB;

  /**
   * The function then adjusts the starting point of the longer list so that
   *  both lists have the same number of nodes before the intersection point.
   */

  for (let i = 0; i < Math.abs(lengthA - lengthB); i++) {
    if (lengthA > lengthB) {
      pointerA = pointerA.next;
    } else {
      pointerB = pointerB.next;
    }
  }

  /**
   * Finding the intersection point
   * The function iterates through both lists using the adjusted pointers
   * until they meet at the intersection point.
   * If there is no intersection, the loop continues until both pointers
   *  reach the end of their respective lists.
   */

  while (pointerA !== pointerB) {
    pointerA = pointerA.next;
    pointerB = pointerB.next;
  }

  /**
   * The function returns the node where the intersection point is found,
   *  or null if there is no intersection.
   */
    return pointerA;
};

// Create linked lists
const listA = new ListNode(4);
listA.next = new ListNode(1);
listA.next.next = new ListNode(8);
listA.next.next.next = new ListNode(4);
listA.next.next.next.next = new ListNode(5);

const listB = new ListNode(5);
listB.next = new ListNode(6);
listB.next.next = new ListNode(1);
listB.next.next.next = listA.next.next; // Creating intersection at '8'

// Find the intersection node
const intersectionNode = getIntersectionNode(listA, listB);
console.log(intersectionNode);
