//https://leetcode-cn.com/problems/n-queens/

export function solveNQueens(n: number): string[][] {
  const result: string[][] = []

  if (n <= 0) return result

  const col: boolean[] = []
  const dia1: boolean[] = []
  const dia2: boolean[] = []
  const row: number[] = []
  const generateBoard = (row: number[]): string[] => {
    const result: string[] = []
    for (let i = 0; i < n; ++i) {
      const stringArr = new Array(n).fill('.')
      stringArr[row[i]] = 'Q'
      result.push(stringArr.join(''))
    }

    return result
  }

  const core = (n: number, index: number) => {
    if (n === index) {
      result.push(generateBoard(row))
      return
    }

    for (let i = 0; i < n; ++i) {
      if (!col[i] && !dia1[index + i] && !dia2[index - i + n - 1]) {
        col[i] = true
        dia1[index + i] = true
        dia2[index - i + n - 1] = true
        row.push(i)
        core(n, index + 1)
        col[i] = false
        dia1[index + i] = false
        dia2[index - i + n - 1] = false
        row.pop()
      }
    }
  }

  core(n, 0)

  return result
}

console.log(solveNQueens(3))
