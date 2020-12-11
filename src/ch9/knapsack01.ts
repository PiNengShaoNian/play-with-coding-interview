const knapsack01 = (w: number[], v: number[], c: number): number => {
  const memo: number[] = []
  const core = (index: number, c: number): number => {
    if (c <= 0 || index < 0) return 0

    if (memo[index] !== undefined) return memo[index]

    let res = core(index - 1, c)

    if (c >= w[index]) {
      res = Math.max(res, v[index] + core(index - 1, c - w[index]))
    }

    return (memo[index] = res)
  }

  return core(w.length - 1, c)
}
