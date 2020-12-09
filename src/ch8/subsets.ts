//https://leetcode-cn.com/problems/subsets/

function subsets(nums: number[]): number[][] {
  const n = nums.length
  const result: number[][] = []

  for (let mask = 0; mask < 1 << n; ++mask) {
    const temp = []

    for (let i = 0; i < n; ++i) {
      if (mask & (1 << i)) {
        temp.push(nums[i])
      }
    }

    result.push(temp)
  }

  return result
}
