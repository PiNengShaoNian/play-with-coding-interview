//https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/

export function lengthOfLongestSubstring(s: string): number {
  let l = 0
  let r = -1
  let res = 0
  const fre = Array.from({ length: 256 }, () => 0)

  while (l < s.length) {
    if (r + 1 < s.length && fre[s.charCodeAt(r + 1)] === 0) {
      fre[s.charCodeAt(++r)]++
    } else {
      fre[s.charCodeAt(l++)]--
    }

    res = Math.max(res, r - l + 1)
  }

  return res
}
