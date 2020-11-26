//https://leetcode-cn.com/problems/word-pattern/

function wordPattern(pattern: string, s: string): boolean {
  const map = new Map<string, string>()
  const reverseMap = new Map<string, string>()

  let result = true
  const words: string[] = s.split(' ')

  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i]) && !reverseMap.has(words[i])) {
      map.set(pattern[i], words[i])
      reverseMap.set(words[i], pattern[i])
    }

    if (
      map.get(pattern[i]) !== words[i] ||
      reverseMap.get(words[i]) !== pattern[i]
    ) {
      result = false
      break
    }
  }

  if (words.length !== pattern.length) result = false

  return result
}
