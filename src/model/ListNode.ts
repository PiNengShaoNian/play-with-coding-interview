export default class ListNode {
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
