//https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
import ListNode from '../model/ListNode'

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null

  const dummy = new ListNode(Infinity, head)

  let pre = dummy
  while (pre.next) {
    let cur = pre.next

    let isDuplucates = false
    while (cur.next && cur.next.val === cur.val) {
      isDuplucates = true
      cur = cur.next
    }

    if (isDuplucates) {
      pre.next = cur.next
    } else {
      pre = cur
    }
  }
  return dummy.next
}
