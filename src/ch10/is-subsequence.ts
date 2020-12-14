//https://leetcode-cn.com/problems/is-subsequence/

export function isSubsequence(s: string, t: string): boolean {
  if (s.length > t.length) return false

  let si = 0
  let ti = 0

  while (ti < t.length && si < s.length) {
    if (s[si] === t[ti]) {
      ++si
      ++ti
    } else ++ti
  }
  return si === s.length
}

console.log(isSubsequence('axc', 'ahbgdc'))
