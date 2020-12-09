//https://leetcode-cn.com/problems/number-of-islands/

export function numIslands(grid: string[][]): number {
  const height = grid.length
  const width = grid[0].length

  const indexToVertex = (i: number, j: number): number => {
    return i * width + j
  }
  const directions: number[][] = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  const vertexToIndex = (vertex: number): [number, number] => {
    return [Math.floor(vertex / width), vertex % width]
  }
  const visited: boolean[][] = Array.from({ length: height }, () => [])
  let count = 0

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === '1' && !visited[i][j]) {
        count++
        const stack: number[] = []
        const vertex = indexToVertex(i, j)
        stack.push(vertex)
        visited[i][j] = true

        while (stack.length) {
          const originVertex = stack.pop()!
          const [y, x] = vertexToIndex(originVertex)

          for (const [yOffset, xOffset] of directions) {
            const newY = yOffset + y
            const newX = xOffset + x

            if (
              newY >= 0 &&
              newY < height &&
              newX >= 0 &&
              newX < width &&
              !visited[newY][newX] &&
              grid[newY][newX] === '1'
            ) {
              const neighborVertex = indexToVertex(newY, newX)
              stack.push(neighborVertex)
              visited[newY][newX] = true
            }
          }
        }
      }
    }
  }

  return count
}
