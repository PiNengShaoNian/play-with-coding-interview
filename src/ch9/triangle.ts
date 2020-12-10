//https://leetcode-cn.com/problems/triangle/

export function minimumTotal(triangle: number[][]): number {
  let result = Infinity

  const core = (depth: number, index: number, sum: number): void => {
    if (depth === triangle.length) {
      result = Math.min(result, sum)
      return
    }

    core(depth + 1, index, sum + triangle[depth][index])
    core(depth + 1, index + 1, sum + triangle[depth][index])
  }

  core(0, 0, 0)

  return result
}

export function minimumTotal1(triangle: number[][]): number {
  if (!triangle.length) return 0

  for (let depth = triangle.length - 2; depth >= 0; --depth) {
    for (let i = 0; i < triangle[depth].length; ++i) {
      triangle[depth][i] =
        triangle[depth][i] +
        Math.min(triangle[depth + 1][i], triangle[depth + 1][i + 1])
    }
  }

  return triangle[0][0]
}

