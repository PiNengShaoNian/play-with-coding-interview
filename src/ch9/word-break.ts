//https://leetcode-cn.com/problems/word-break/

export function wordBreak(s: string, wordDict: string[]): boolean {
  const firstLetterToWords: string[][] = Array.from({ length: 256 }, () => [])

  const memo: boolean[] = []
  for (let i = 0; i < wordDict.length; ++i) {
    firstLetterToWords[wordDict[i].charCodeAt(0)].push(wordDict[i])
  }

  const core = (index: number): boolean => {
    if (index > s.length) return false

    if (index === s.length) return true

    if (memo[index] !== undefined) return memo[index]

    let res = false

    const words = firstLetterToWords[s[index].charCodeAt(0)]

    for (let i = 0; i < words.length; ++i) {
      const word = words[i]

      if (index + word.length > s.length) continue

      if (s.substr(index, word.length) === word) {
        if (core(index + word.length)) {
          res = true
          break
        }
      }
    }

    return (memo[index] = res)
  }

  return core(0)
}
