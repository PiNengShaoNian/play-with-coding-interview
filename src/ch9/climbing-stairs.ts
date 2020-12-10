//https://leetcode-cn.com/problems/climbing-stairs/

export function climbStairs(n: number): number {
  const memo: number[] = []

  memo[0] = memo[1] = 1

  for (let i = 2; i <= n; ++i) {
    memo[i] = memo[i - 1] + memo[i - 2]
  }

  return memo[n]
}
