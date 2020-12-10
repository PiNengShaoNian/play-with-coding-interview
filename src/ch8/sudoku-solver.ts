//https://leetcode-cn.com/problems/sudoku-solver/

export function solveSudoku(board: string[][]): void {
  const mapSize = 12

  const row: boolean[][] = Array.from({ length: 9 }, () =>
    Array.from({ length: mapSize }, () => false)
  )
  const column: boolean[][] = Array.from({ length: 9 }, () =>
    Array.from({ length: mapSize }, () => false)
  )
  const block: boolean[][] = Array.from({ length: 9 }, () =>
    Array.from({ length: mapSize }, () => false)
  )
  const spaces: [row: number, column: number][] = []

  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      if (board[i][j] !== '.') {
        const charCode = board[i][j].charCodeAt(0) - 46
        row[i][charCode] = true
        column[j][charCode] = true
        const blockIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
        block[blockIndex][charCode] = true
      } else {
        spaces.push([i, j])
      }
    }
  }

  const core = (spaces: [number, number][], n: number): boolean => {
    if (n === spaces.length) return true
    const [i, j] = spaces[n]

    for (let num = 1; num <= 9; ++num) {
      const charCode = (num + '').charCodeAt(0) - 46
      const blockIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      if (
        !row[i][charCode] &&
        !column[j][charCode] &&
        !block[blockIndex][charCode]
      ) {
        board[i][j] = num + ''
        row[i][charCode] = column[j][charCode] = block[blockIndex][
          charCode
        ] = true

        if (core(spaces, n + 1)) return true

        row[i][charCode] = column[j][charCode] = block[blockIndex][
          charCode
        ] = false
      }
    }

    return false
  }

  core(spaces, 0)
}
