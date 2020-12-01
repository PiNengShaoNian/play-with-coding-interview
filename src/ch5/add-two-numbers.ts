//https://leetcode-cn.com/problems/add-two-numbers/

import ListNode from '../model/ListNode'

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) return l2

  if (!l2) return l1

  let cur1: ListNode | null = l1
  let cur2: ListNode | null = l2
  let result = new ListNode(Infinity, null)
  let curR = result

  let takeOver = 0
  while (cur1 || cur2) {
    let sum = (cur2?.val || 0) + (cur1?.val || 0) + takeOver
    if (sum >= 10) {
      takeOver = 1
      sum %= 10
    } else {
      takeOver = 0
    }

    curR.next = new ListNode(sum, null)
    curR = curR.next
    if (cur1) cur1 = cur1.next
    if (cur2) cur2 = cur2.next
  }

  if (takeOver) curR.next = new ListNode(1, null)

  return result.next
}
