//https://leetcode-cn.com/problems/word-ladder/

import LoopQueue from '../util/LoopQueue'

export function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  if (beginWord === endWord) return 1

  const vertices: Set<string> = new Set(wordList)

  const nextWords = (curWord: string): string[] => {
    let result: string[] = []
    for (const word of vertices) {
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
  vertices.delete(beginWord)

  while (queue.size()) {
    const [vertex, distance] = queue.dequeue()!

    for (const neighbor of nextWords(vertex)) {
      if (neighbor === endWord) return distance + 1

      queue.enqueue([neighbor, distance + 1])
      vertices.delete(neighbor)
    }
  }

  return -1
}

debugger
ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])

let n = 1 * 10000

const queue = new LoopQueue<number>()

for (let i = 0; i < n; i++) {
  queue.enqueue(0)
}

console.time('a')
for (let i = 0; i < n; i++) {
  queue.dequeue()
}
console.timeEnd('a')
