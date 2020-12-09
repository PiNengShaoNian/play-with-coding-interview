//https://leetcode-cn.com/problems/surrounded-regions/

export function solve(board: string[][]): void {
  if (!board.length) return

  const rows = board.length
  const columns = board[0].length

  const dfs = (row: number, column: number) => {
    if (
      row < 0 ||
      row >= rows ||
      column < 0 ||
      column >= columns ||
      board[row][column] !== 'O'
    )
      return

    board[row][column] = '.'

    dfs(row - 1, column)
    dfs(row, column + 1)
    dfs(row + 1, column)
    dfs(row, column - 1)
  }

  for (let i = 0; i < rows; i++) {
    dfs(i, 0)
    dfs(i, columns - 1)
  }

  for (let i = 0; i < columns; i++) {
    dfs(0, i)
    dfs(rows - 1, i)
  }

  for (let row = 0; row < rows; ++row) {
    for (let column = 0; column < columns; ++column) {
      if (board[row][column] === '.') board[row][column] = 'O'
      else if (board[row][column] === 'O') board[row][column] = 'X'
    }
  }
}
