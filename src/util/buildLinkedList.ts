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

export function buildLinkedList(arr: number[]) {
  let head: ListNode
  let cur: ListNode = (head = new ListNode(arr[0], null))

  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i], null)
    cur = cur.next
  }

  return head
}
