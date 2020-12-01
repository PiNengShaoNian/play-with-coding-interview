//https://leetcode-cn.com/problems/swap-nodes-in-pairs/

import ListNode from '../model/ListNode'

export function swapPairs(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(Infinity, head)
  let pre = dummy

  while (pre.next && pre.next.next) {
    const node1 = pre.next
    const node2 = pre.next.next
    const next = node2.next

    node1.next = next
    node2.next = node1

    pre.next = node2
    pre = node1
  }

  return dummy.next
}

    