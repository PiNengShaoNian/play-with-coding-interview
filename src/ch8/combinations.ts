//https://leetcode-cn.com/problems/combinations/

export function combine(n: number, k: number): number[][] {
  const result: number[][] = []
  if (n <= 0 || k <= 0 || k > n) return result
  const core = (start: number, c: number[]): void => {
    if (c.length === k) {
      result.push(c)
      return
    }

    for (let i = start; i <= n; ++i) {
      c.push(i)
      core(i + 1, c.slice())
      c.pop()
    }
  }

  core(1, [])

  return result
}
