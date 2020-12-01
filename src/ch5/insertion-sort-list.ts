//https://leetcode-cn.com/problems/insertion-sort-list/

import ListNode from '../model/ListNode'

export function insertionSortList(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(-Infinity, head)

  let cur = dummy.next
  let next
  while (cur) {
    next = cur.next
    if (!next) break

    if (next && cur.val <= next.val) {
      cur = cur.next
    } else {
      let pre = dummy

      while (pre.next) {
        if (pre.next.val <= next.val) {
          pre = pre.next
        } else break
      }

      const temp = pre.next!
      pre.next = next
      cur.next = next.next
      next.next = temp
    }
  }

  return dummy.next
}
