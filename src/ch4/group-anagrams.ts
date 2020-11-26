//https://leetcode-cn.com/problems/group-anagrams/submissions/

export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>()
  let result: string[][] = []
  for (let i = 0; i < strs.length; i++) {
    const charCount: number[] = []

    for (let j = 0; j < 26; j++) {
      charCount[j] = 0
    }

    for (let j = 0; j < strs[i].length; j++) {
      charCount[strs[i].charCodeAt(j) - 97]++
    }

    const hash = charCount.join('-')
    if (!map.has(hash)) {
      map.set(hash, [strs[i]])
    } else {
      map.get(hash)!.push(strs[i])
    }
  }

  for (const value of map.values()) {
    result.push(value)
  }
  return result
}