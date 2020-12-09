//https://leetcode-cn.com/problems/word-search/

export function exist(board: string[][], word: string): boolean {
  let result = false
  let visited: boolean[][]
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  const rows = board.length
  const columns = board[0].length

  const dfs = (row: number, column: number, n: number): boolean => {
    if (n === word.length - 1) {
      return word[word.length - 1] === board[row][column]
    }

    if (board[row][column] !== word[n]) return false
    visited[row][column] = true

    for (const [rowOffset, columnOffset] of directions) {
      const newRow = row + rowOffset
      const newColumn = column + columnOffset

      if (
        newRow >= 0 &&
        newRow < rows &&
        newColumn >= 0 &&
        newColumn < columns &&
        !visited[newRow][newColumn]
      ) {
        visited[newRow][newColumn] = true
        if (dfs(newRow, newColumn, n + 1)) return true
        else visited[newRow][newColumn] = false
      }
    }

    visited[row][column] = false
    return false
  }

  for (let row = 0; row < rows; ++row) {
    for (let column = 0; column < columns; ++column) {
      visited = Array.from({ length: board.length }, () => [])
      if (dfs(row, column, 0)) {
        result = true
        break
      }
    }
  }

  return result
}

console.log(exist([['a']], 'a'))
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCB'
  )
)
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCESEECD'
  )
)
