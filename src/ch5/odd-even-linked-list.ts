import { buildLinkedList } from '../util/buildLinkedList'

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }

  *[Symbol.iterator]() {
    for (let x: null | ListNode = this; x; x = x.next) {
      yield x.val
    }
  }
}

export function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) return null
  let listEven: ListNode | null = new ListNode(Infinity, null)
  let listOdd: ListNode | null = new ListNode(Infinity, null)

  let i = 0
  let cur: ListNode | null = head
  let curEven = listEven
  let curOdd = listOdd
  while (cur) {
    if (i % 2 === 0) {
      curEven.next = cur
      curEven = cur
    } else {
      curOdd.next = cur
      curOdd = cur
    }

    const temp = cur
    cur = cur.next
    //避免成环
    temp.next = null
    i++
  }

  listEven = listEven.next
  listOdd = listOdd.next

  if (!listEven) return listOdd

  if (!listOdd) return listEven

  curEven.next = listOdd

  return listEven
}

console.log([...oddEvenList(buildLinkedList([2, 1, 3, 5, 6, 4, 7]))!])
