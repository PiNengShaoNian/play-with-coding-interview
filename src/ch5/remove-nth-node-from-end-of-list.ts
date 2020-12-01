//https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

import ListNode from '../model/ListNode'

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (!head) return null

  const dummy = new ListNode(Infinity, head)
  let slow: ListNode = dummy
  let fast: ListNode = dummy

  for (let i = 0; i < n + 1; i++) {
    fast = fast.next!
  }

  while (fast) {
    fast = fast.next!
    slow = slow.next!
  }

  slow.next = slow.next!.next

  return dummy.next
}
