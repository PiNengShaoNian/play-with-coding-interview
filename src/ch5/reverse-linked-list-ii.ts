//https://leetcode-cn.com/problems/reverse-linked-list-ii/

import ListNode from '../model/ListNode'

export function reverseBetween(
  head: ListNode | null,
  m: number,
  n: number
): ListNode | null {
  if (!head) return null

  let middleCur: ListNode = head
  let middlePre: ListNode
  let middleNext: ListNode

  let middleEnd: ListNode
  let leftEnd: ListNode | null = null

  for (let i = 0; i < m; i++) {
    if (i === m - 2) {
      leftEnd = middleCur
    }
    middlePre = middleCur
    middleCur = middleCur.next!
  }

  middleEnd = middlePre!

  for (let i = 0; i < n - m; i++) {
    middleNext = middleCur.next!
    middleCur.next = middlePre!
    middlePre = middleCur
    middleCur = middleNext
  }

  middleEnd.next = middleCur
  if (leftEnd) leftEnd.next = middlePre!

  return m === 1 ? middlePre! : head
}
