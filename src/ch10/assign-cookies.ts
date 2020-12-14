//https://leetcode-cn.com/problems/assign-cookies/

export function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => b - a)
  s.sort((a, b) => b - a)

  let gi = 0
  let si = 0
  let result = 0
  while (gi < g.length && si < s.length) {
    if (g[gi] <= s[si]) {
      ++result
      ++gi
      ++si
    } else ++gi
  }

  return result
}
