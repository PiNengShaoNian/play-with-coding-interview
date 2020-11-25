//https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/comments/

export function findAnagrams(s: string, p: string): number[] {
  if (s.length < p.length) return []

  let l = 0
  let r = -1
  let res = []
  const freP = Array.from({ length: 26 }, () => 0)
  const freS = Array.from({ length: 26 }, () => 0)
  for (let i = 0; i < p.length; i++) {
    freP[p.charCodeAt(i) - 97]++
  }

  while (r < s.length - 1) {
    if (r - l + 1 < p.length) {
      freS[s.charCodeAt(++r) - 97]++
    } else {
      freS[s.charCodeAt(++r) - 97]++
      freS[s.charCodeAt(l++) - 97]--
    }

    let isSame = true
    for (let i = 0; i < 26; i++) {
      if (freP[i] !== freS[i]) {
        isSame = false
        break
      }
    }

    if (isSame) {
      res.push(l)
    }
  }

  return res
}

console.log(findAnagrams('abab', 'ab'))
