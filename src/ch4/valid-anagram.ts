//https://leetcode-cn.com/problems/valid-anagram/
export function isAnagram(s: string, t: string): boolean {
  const map = Array.from({ length: 26 }, () => 0)

  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i) - 97]++
  }

  for (let i = 0; i < t.length; i++) {
    map[t.charCodeAt(i) - 97]--
  }

  let result = true

  for (let i = 0; i < map.length; i++) {
    if (map[i] !== 0) {
      result = false
      break
    }
  }
  return result
}
