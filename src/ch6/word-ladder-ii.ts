//https://leetcode-cn.com/problems/word-ladder-ii/

import LoopQueue from '../util/LoopQueue'

export function findLadders(
  beginWord: string,
  endWord: string,
  wordList: string[]
): string[][] {
  let result: string[][] = []
  if (beginWord === endWord) return result

  const distTo: Map<string, number> = new Map()

  const nextWords = (curWord: string): string[] => {
    let result: string[] = []
    for (const word of wordList) {
      let diff = 0
      for (let i = 0; i < curWord.length; i++) {
        if (curWord[i] !== word[i]) diff++

        if (diff > 1) break
      }

      if (diff === 1) {
        result.push(word)
      }
    }

    return result
  }

  const queue = new LoopQueue<[string, number]>()

  queue.enqueue([beginWord, 1])
  distTo.set(beginWord, 1)

  //先进行一边BFS获取各个节点的距离，方便后续DFS剪枝
  while (queue.size()) {
    const [vertex, distance] = queue.dequeue()!

    for (const neighbor of nextWords(vertex)) {
      if (distTo.has(neighbor)) continue

      queue.enqueue([neighbor, distance + 1])
      distTo.set(neighbor, distance + 1)
    }
  }

  const dfs = (vertex: string, path: string[], depth: number) => {
    if (depth > distTo.get(vertex)!) return
    path.push(vertex)

    if (vertex === endWord) {
      result.push([...path])
    }
    for (let neghbor of nextWords(vertex)) {
      dfs(neghbor, path, depth + 1)
    }

    path.pop()
  }

  dfs(beginWord, [], 1)

  return result
}
