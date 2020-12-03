//https://leetcode-cn.com/problems/top-k-frequent-elements/

import Comparable from '../model/Comparable'
import MinPriorityQueue from '../util/min-priority-queue'

class ElementWithFrequent implements Comparable<ElementWithFrequent> {
  constructor(public frequent: number, public element: number) {}

  compareTo(that: ElementWithFrequent): number {
    return this.frequent - that.frequent
  }

  equals(): boolean {
    throw new Error('Method not implemented.')
  }
}

export function topKFrequent(nums: number[], k: number): number[] {
  const pq = new MinPriorityQueue<ElementWithFrequent>()
  const result: number[] = []
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) map.set(nums[i], 1)
    else map.set(nums[i], map.get(nums[i])! + 1)
  }

  for (const [ele, fre] of map.entries()) {
    if (pq.size() === k) {
      const min = pq.min()!
      if (min.frequent < fre) {
        pq.deleteMin()
        pq.insert(new ElementWithFrequent(fre, ele))
      }
    } else {
      pq.insert(new ElementWithFrequent(fre, ele))
    }
  }

  while (pq.size()) {
    result.push(pq.deleteMin()!.element)
  }

  return result
}
