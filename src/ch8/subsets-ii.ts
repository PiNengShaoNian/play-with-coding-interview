//https://leetcode-cn.com/problems/subsets-ii/

export function subsetsWithDup(nums: number[]): number[][] {
  const result: number[][] = []
  nums.sort((a, b) => a - b)

  const core = (begin: number, path: number[]): void => {
    result.push(path.slice())

    for (let i = begin; i < nums.length; ++i) {
      if (i > begin && nums[i] === nums[i - 1]) continue

      path.push(nums[i])
      core(i + 1, path)
      path.pop()
    }
  }

  core(0, [])

  return result
}
