//https://leetcode-cn.com/problems/decode-ways/

export function numDecodings(s: string): number {
  const memo: number[] = []

  const core = (n: number): number => {
    let res = 0

    if (memo[n] !== undefined) return memo[n]

    if (n === s.length) return 1

    if (s[n] === '0') return 0

    res += core(n + 1)

    if (n + 1 < s.length && s.substr(n, 2) <= '26') {
      res += core(n + 2)
    }

    return (memo[n] = res)
  }

  return core(0)
}
