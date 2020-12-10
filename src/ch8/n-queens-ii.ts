//https://leetcode-cn.com/problems/n-queens/

export function totalNQueens(n: number): number {
  let result = 0

  if (n <= 0) return result

  const col: boolean[] = []
  const dia1: boolean[] = []
  const dia2: boolean[] = []
  const row: number[] = []

  const core = (n: number, index: number) => {
    if (n === index) {
      result++
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

console.log(totalNQueens(5))
