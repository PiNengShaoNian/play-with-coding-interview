//https://leetcode-cn.com/problems/combination-sum-iii/
export function combinationSum3(k: number, n: number): number[][] {
  const result: number[][] = []

  const core = (begin: number, sum: number, path: number[]): void => {
    if (path.length > k) return

    if (path.length === k) {
      if (sum === n) {
        result.push(path.slice())
      }

      return
    }

    for (let i = begin; i <= 9; ++i) {
      if (sum + i > n) break

      path.push(i)
      core(i + 1, sum + i, path)
      path.pop()
    }
  }

  core(1, 0, [])

  return result
}
