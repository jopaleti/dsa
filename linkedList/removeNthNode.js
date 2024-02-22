class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
  // Create a dummy edge to handle the edge case
  const dummy = new ListNode(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;

  // Move fast pointer n+1 steps ahead
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  // Move both pointers at the same time until fastt reaches the end
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Remove the nth node from the end
  slow.next = slow.next.next;

  return dummy.next;
};

