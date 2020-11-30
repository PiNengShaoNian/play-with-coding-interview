//https://leetcode-cn.com/problems/reverse-linked-list/

import ListNode from '../model/ListNode'

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null

  let prev: ListNode | null = null
  let cur: ListNode | null = head
  let next: ListNode | null = cur.next

  while (cur) {
    cur.next = prev

    prev = cur
    cur = next
    if (cur) {
      next = cur.next
    }
  }

  return prev
}
