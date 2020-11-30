import ListNode from '../model/ListNode'

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null

  const dummy = new ListNode(Infinity, head)

  let pre = dummy

  while (pre.next) {
    let cur = pre.next
    const vlaue = cur.val

    while (cur.next && cur.next.val == vlaue) {
      cur = cur.next
    }

    pre.next = cur
    pre = cur
  }

  return dummy.next
}
