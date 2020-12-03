//https://leetcode-cn.com/problems/merge-k-sorted-lists/

import Comparable from '../model/Comparable'
import ListNode from '../model/ListNode'
import MinPriorityQueue from '../util/min-priority-queue'

class ComparableNode implements Comparable<ComparableNode> {
  constructor(public node: ListNode, public val: number) {}

  compareTo(that: ComparableNode): number {
    return this.val - that.val
  }
  equals(that: ComparableNode): boolean {
    return this.node === that.node
  }
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const dummy = new ListNode(Infinity, null)
  const pq = new MinPriorityQueue<ComparableNode>()
  for (let i = 0; i < lists.length; i++) {
    let cur = lists[i]
    let prev
    while (cur) {
      prev = cur
      pq.insert(new ComparableNode(cur, cur.val))
      cur = cur.next
      prev.next = null
    }
  }

  let cur = dummy
  while (pq.size()) {
    cur.next = pq.deleteMin()!.node
    cur = cur.next
  }

  return dummy.next
}
