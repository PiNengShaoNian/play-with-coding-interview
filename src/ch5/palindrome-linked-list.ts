//https://leetcode-cn.com/problems/palindrome-linked-list/

import ListNode from '../model/ListNode'

function reverseList(head: ListNode | null): ListNode | null {
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

export function isPalindrome(head: ListNode | null): boolean {
  if (!head) return true
  let slow: ListNode = head
  let fast: ListNode | null = head

  let leftListEnd: ListNode
  while (fast) {
    fast = fast.next
    leftListEnd = slow
    slow = slow.next!
    if (fast) {
      fast = fast.next
    } else break
  }

  if (!slow) return true

  leftListEnd!.next = null

  const rightList = reverseList(slow)
  let curLeft: ListNode | null = head
  let curRight: ListNode | null = rightList
  let result = true

  while (curLeft && curRight) {
    if (curLeft.val !== curRight.val) {
      result = false
      break
    }

    curLeft = curLeft.next
    curRight = curRight.next
  }

  return result
}
