//https://leetcode-cn.com/problems/combination-sum-ii/

export function combinationSum2(
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
      if (cur < 0) break

      if (i > begin && candidates[i] === candidates[i - 1]) continue
      path.push(candidates[i])
      core(i + 1, cur, path)
      path.pop()
    }
  }

  core(0, target, [])

  return result
}

debugger
console.log(combinationSum2([2, 5, 2, 1, 2], 5))
