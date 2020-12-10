//https://leetcode-cn.com/problems/perfect-squares/

function numSquares(n: number): number {
  const memo: number[] = []

  const core = (n: number): number => {
    if (n === 1) return 1

    if (memo[n] !== undefined) return memo[n]

    let res = Infinity

    for (let i = 1; ; ++i) {
      const remainning = n - i * i
      if (remainning <= 0) {
        if (remainning == 0) res = 1
        break
      }

      res = Math.min(res, core(remainning) + 1)
    }

    return (memo[n] = res)
  }

  return core(n)
}
