//https://leetcode-cn.com/problems/perfect-squares/

import LoopQueue from '../util/LoopQueue'

type Vertex = [number, number]
export function numSquares(n: number): number {
  const queue = new LoopQueue<Vertex>()

  queue.enqueue([n, 0])
  let result = -1
  const visited: boolean[] = []

  for (let i = 0; i < n + 1; i++) {
    visited[i] = false
  }

  flag: while (queue.size()) {
    const [vertex, distance] = queue.dequeue()!

    for (let i = 1; ; i++) {
      const a = vertex - i * i
      if (a < 0) break
      if (a === 0) {
        result = distance + 1
        break flag
      }

      if (!visited[a]) {
        queue.enqueue([a, distance + 1])
        visited[a] = true
      }
    }
  }

  return result
}
