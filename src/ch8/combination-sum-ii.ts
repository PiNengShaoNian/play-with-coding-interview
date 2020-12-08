//https://leetcode-cn.com/problems/combination-sum-ii/

export function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  const result: number[][] = []
  const set = new Set<string>()

  candidates.sort((a, b) => a - b)

  const core = (n: number, c: number[], sum: number) => {
    if (n === candidates.length) {
      const str = c.join('-')
      if (sum === target && !set.has(str)) {
        set.add(str)
        result.push(c.slice())
      }
      return
    }

    if (sum > target) {
      return
    }

    c.push(candidates[n])
    core(n + 1, c, sum + candidates[n])

    c.pop()
    core(n + 1, c, sum)
  }

  core(0, [], 0)

  return result
}

console.log(combinationSum2([1, 2, 3], 3))
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
console.log(combinationSum2([2, 5, 2, 1, 2], 5))
