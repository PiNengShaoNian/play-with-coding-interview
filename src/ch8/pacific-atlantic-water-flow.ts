//https://leetcode-cn.com/problems/pacific-atlantic-water-flow/

export function pacificAtlantic(matrix: number[][]): number[][] {
  const result: number[][] = []
  if (!matrix.length) return result
  const rows = matrix.length
  const columns = matrix[0].length
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  const dfs = (row: number, column: number, visted: boolean[][]): void => {
    visted[row][column] = true

    for (const [rowOffset, columnOffset] of directions) {
      const newRow = row + rowOffset
      const newColumn = column + columnOffset

      if (
        newRow < 0 ||
        newRow >= rows ||
        newColumn < 0 ||
        newColumn >= columns ||
        visted[newRow][newColumn] ||
        matrix[newRow][newColumn] < matrix[row][column]
      )
        continue

      visted[newRow][newColumn] = true
      dfs(newRow, newColumn, visted)
    }
  }

  const pVisted = Array.from({ length: rows }, () => [])
  const aVisited = Array.from({ length: rows }, () => [])
  for (let i = 0; i < rows; ++i) {
    dfs(i, 0, pVisted)
    dfs(i, columns - 1, aVisited)
  }

  for (let i = 0; i < columns; ++i) {
    dfs(0, i, pVisted)
    dfs(rows - 1, i, aVisited)
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      if (pVisted[i][j] === true && aVisited[i][j] === true) {
        result.push([i, j])
      }
    }
  }

  return result
}
