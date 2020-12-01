//https://leetcode-cn.com/problems/rotate-list/

import ListNode from '../model/ListNode'

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || k <= 0) return head
  let length = 0

  let node: ListNode | null = head

  while (node) {
    node = node.next
    length++
  }

  k %= length

  if (k === 0) return head

  let leftTail: ListNode = head
  let fast: ListNode | null = head
  let rightTail: ListNode

  for (let i = 0; i < k + 1; i++) {
    rightTail = fast
    fast = fast.next!
  }

  while (fast) {
    fast = fast.next
    rightTail = rightTail!.next!
    leftTail = leftTail.next!
  }

  const rightList = leftTail.next

  leftTail.next = null
  rightTail!.next = head

  return rightList
}
