//https://leetcode-cn.com/problems/unique-paths-ii/

export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const memo: number[][] = Array.from({ length: m }, () => [])

  const core = (row: number, column: number): number => {
    if (memo[row][column] !== undefined) return memo[row][column]

    if (row === m - 1 && column === n - 1 && obstacleGrid[row][column] === 0)
      return 1

    if (obstacleGrid[row][column] === 1) return 0

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
