//https://leetcode-cn.com/problems/house-robber-ii

export function rob(nums: number[]): number {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  let memo: number[] = []
  const core = (l: number, r: number): number => {
    if (l >= r) return 0

    if (memo[l] !== undefined) return memo[l]

    let res = 0

    for (let i = l; i < r; ++i) {
      res = Math.max(res, nums[i] + core(i + 2, r))
    }

    return (memo[l] = res)
  }

  const v1 = core(0, nums.length - 1)
  memo = []
  const v2 = core(1, nums.length)

  return Math.max(v1, v2)
}
