//https://leetcode-cn.com/problems/reorder-list/

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

export function reorderList(head: ListNode | null): ListNode | null {
  if (!head) return head
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

  if (!slow) return head

  leftListEnd!.next = null

  const rightList = reverseList(slow)

  const result = new ListNode(Infinity, null)

  let leftCur: ListNode | null = head
  let rightCur: ListNode | null = rightList
  let resultCur = result

  while (leftCur || rightCur) {
    if (leftCur && !rightCur) {
      resultCur.next = leftCur
      leftCur = leftCur.next
      resultCur = resultCur.next
    } else if (rightCur && !leftCur) {
      resultCur.next = rightCur
      rightCur = rightCur.next
      resultCur = resultCur.next
    } else if (leftCur && rightCur) {
      resultCur.next = leftCur
      leftCur = leftCur.next
      resultCur = resultCur.next
      resultCur.next = rightCur
      rightCur = rightCur.next
      resultCur = resultCur.next
    }
  }

  return result.next
}
