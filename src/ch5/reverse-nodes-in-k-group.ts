//https://leetcode-cn.com/problems/reverse-nodes-in-k-group/

import ListNode from '../model/ListNode'

export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  const reverse = (
    head: ListNode,
    tail: ListNode
  ): [head: ListNode, tail: ListNode] => {
    let pre: ListNode | null = null
    let cur: null | ListNode = head
    let next: ListNode | null
    let end = tail.next

    while (cur && cur !== end) {
      next = cur.next

      cur.next = pre
      pre = cur
      cur = next
    }

    return [tail, head]
  }

  let dummy = new ListNode(Infinity, head)
  let pre = dummy
  let cur
  let next
  while (pre.next) {
    cur = pre.next
    for (let i = 1; i < k && cur; i++) {
      cur = cur.next
    }
    if (!cur) break

    next = cur.next
    const [head, tail] = reverse(pre.next, cur)
    pre.next = head
    tail.next = next
    pre = tail
  }

  return dummy.next
}
