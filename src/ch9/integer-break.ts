//https://leetcode-cn.com/problems/integer-break/

export function integerBreak(n: number): number {
  const memo: number[] = Array.from({ length: n + 1 }, () => -Infinity)

  memo[1] = 1

  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j < i; ++j) {
      memo[i] = Math.max(memo[i], j * memo[i - j], j * (i - j))
    }
  }

  return memo[n]
}

export function integerBreak1(n: number): number {
  const memo: number[] = []
  const core = (n: number): number => {
    if (n === 1) return 1

    if (memo[n] !== undefined) return memo[n]

    let res = -1
    for (let i = 1; i < n; ++i) {
      res = Math.max(res, (n - i) * i, i * core(n - i))
    }

    return (memo[n] = res)
  }

  return core(n)
}
