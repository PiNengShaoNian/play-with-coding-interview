import ListNode from '../model/ListNode'

export function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) return null

  let cur: ListNode | null = head
  let listL: ListNode | null = new ListNode(Infinity, null)
  let listR: ListNode | null = new ListNode(Infinity, null)
  let curL = listL
  let curR = listR
  while (cur) {
    if (cur.val >= x) {
      curR.next = cur
      curR = cur
    } else {
      curL.next = cur
      curL = cur
    }
    const pre = cur
    cur = cur.next
    pre.next = null
  }

  listL = listL.next

  listR = listR.next

  if (!listL) return listR

  if (!listR) return listL

  curL.next = listR

  return listL
}
