//https://leetcode-cn.com/problems/target-sum/

export function findTargetSumWays(nums: number[], S: number): number {
  const memo: number[][] = Array.from({ length: 21 }, () => [])
  const core = (depth: number, sum: number): number => {
    if (memo[depth][sum] !== undefined) return memo[depth][sum]
    let result = 0
    if (depth === nums.length) {
      if (sum === S) return 1
      else return 0
    }

    result += core(depth + 1, sum + nums[depth])
    result += core(depth + 1, sum - nums[depth])

    return (memo[depth][sum] = result)
  }

  return core(0, 0)
}
