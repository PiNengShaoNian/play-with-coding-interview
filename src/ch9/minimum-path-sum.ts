//https://leetcode-cn.com/problems/minimum-path-sum/

export function minPathSum(grid: number[][]): number {
  if (!grid.length) return 0

  const rows = grid.length
  const columns = grid[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i === 0) {
        const valueFromLeft = grid[0][j - 1] ?? 0
        grid[i][j] += valueFromLeft
      } else if (j === 0) {
        const valueFromTop = grid[i - 1][0] ?? 0
        grid[i][j] += valueFromTop
      } else {
        const valueFromTop = grid[i - 1][j]
        const valueFromLeft = grid[i][j - 1]
        grid[i][j] = Math.min(valueFromLeft, valueFromTop) + grid[i][j]
      }
    }
  }

  return grid[rows - 1][columns - 1]
}

console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
)
