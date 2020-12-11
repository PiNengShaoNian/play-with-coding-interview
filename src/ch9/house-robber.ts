//https://leetcode-cn.com/problems/house-robber/

export function rob(nums: number[]): number {
  const memo: number[] = []
  const core = (n: number): number => {
    if (n >= nums.length) return 0

    if (memo[n] !== undefined) return memo[n]

    let res = 0

    for (let i = n; i < nums.length; ++i) {
      res = Math.max(res, nums[i] + core(i + 2))
    }

    return (memo[n] = res)
  }

  return core(0)
}

function rob1(nums: number[]): number {
  const memo: number[] = []

  memo[nums.length - 1] = nums[nums.length - 1]

  for (let i = nums.length - 2; i >= 0; --i) {
    for (let j = i; j < nums.length; ++j) {
      memo[i] = Math.max(memo[i], memo[j] + (memo[j + 2] ?? 0))
    }
  }

  return memo[0]
}

console.log(rob([2, 7, 9, 3, 1]))
console.log(rob1([2, 7, 9, 3, 1]))
