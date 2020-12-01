//https://leetcode-cn.com/problems/merge-two-sorted-lists/

import ListNode from '../model/ListNode'

export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(Infinity, null)

  let curResult = dummy
  let cur1: ListNode | null = l1
  let cur2: ListNode | null = l2

  while (cur1 || cur2) {
    if (!cur1 && cur2) {
      curResult.next = cur2
      break
    } else if (cur1 && !cur2) {
      curResult.next = cur1
      break
    } else if (cur1!.val > cur2!.val) {
      curResult.next = cur2
      cur2 = cur2!.next
    } else {
      curResult.next = cur1
      cur1 = cur1!.next
    }

    curResult = curResult.next!
  }

  return dummy.next
}
