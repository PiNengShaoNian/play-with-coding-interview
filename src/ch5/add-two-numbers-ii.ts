//https://leetcode-cn.com/problems/add-two-numbers-ii/

import ListNode from '../model/ListNode'

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) return l2

  if (!l2) return l1

  const stack1: ListNode[] = []
  const stack2: ListNode[] = []

  let cur: ListNode | null = l1
  while (cur) {
    stack1.push(cur)
    cur = cur.next
  }

  cur = l2
  while (cur) {
    stack2.push(cur)
    cur = cur.next
  }

  let result: ListNode | null = null

  let takeOver = 0
  while (stack1.length || stack2.length || takeOver > 0) {
    const cur1 = stack1.pop() ?? null
    const cur2 = stack2.pop() ?? null
    let sum = (cur2?.val || 0) + (cur1?.val || 0) + takeOver
    if (sum >= 10) {
      takeOver = 1
      sum %= 10
    } else {
      takeOver = 0
    }

    const node = new ListNode(sum, null)
    node.next = result
    result = node
  }

  return result
}
