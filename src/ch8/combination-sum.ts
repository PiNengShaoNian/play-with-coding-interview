//https://leetcode-cn.com/problems/combination-sum/

export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const result: number[][] = []
  candidates.sort((a, b) => a - b)

  const core = (begin: number, target: number, path: number[]): void => {
    if (target === 0) {
      result.push(path.slice())
      return
    }

    for (let i = begin; i < candidates.length; ++i) {
      const cur = target - candidates[i]

      if (cur >= 0) {
        path.push(candidates[i])
        core(i, cur, path)
        path.pop()
      } else break
    }
  }

  core(0, target, [])

  return result
}
