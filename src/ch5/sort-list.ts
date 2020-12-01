//https://leetcode-cn.com/problems/sort-list/

import ListNode from '../model/ListNode'
import { buildLinkedList } from '../util/buildLinkedList'

function mergeTwoLists(
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

export function sortList(head: ListNode | null): ListNode | null {
  if (!head) return null
  let length = 0

  let node: ListNode | null = head

  while (node) {
    length++
    node = node.next
  }

  const dummy = new ListNode(Infinity, head)

  for (let subLength = 1; subLength < length; subLength *= 2) {
    let prev = dummy
    let cur = dummy.next

    while (cur) {
      const head1 = cur

      for (let i = 1; i < subLength && cur.next; i++) {
        cur = cur.next
      }

      const head2 = cur.next
      cur.next = null
      cur = head2

      for (let i = 1; i < subLength && cur && cur.next; i++) {
        cur = cur.next
      }

      let next: ListNode | null = null
      if (cur) {
        next = cur.next
        cur.next = null
      }

      const merged = mergeTwoLists(head1, head2)

      prev.next = merged

      while (prev.next) {
        prev = prev.next
      }

      cur = next
    }
  }

  return dummy.next
}

debugger
console.log([...sortList(buildLinkedList([1, 1, 3]))!])
