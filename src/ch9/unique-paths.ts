//https://leetcode-cn.com/problems/unique-paths/

export function uniquePaths(m: number, n: number): number {
  const memo: number[][] = Array.from({ length: m }, () => [])

  const core = (row: number, column: number): number => {
    if (memo[row][column] !== undefined) return memo[row][column]

    if (row === m - 1 && column === n - 1) return 1

    let res = 0

    if (row + 1 < m) {
      res += core(row + 1, column)
    }

    if (column + 1 < n) {
      res += core(row, column + 1)
    }

    return (memo[row][column] = res)
  }

  return core(0, 0)
}
