//https://leetcode-cn.com/problems/remove-linked-list-elements/

import ListNode from '../model/ListNode'

export function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  const dummy = new ListNode(Infinity, head)

  let pre = dummy

  while (pre.next) {
    const cur = pre.next

    if (cur.val === val) {
      pre.next = cur.next
    } else pre = pre.next
  }

  return dummy.next
}
