//https://leetcode-cn.com/problems/max-points-on-a-line/

function maxPoints(points: number[][]): number {
  if (!points.length) return 0
  const gcd = (a: number, b: number): number => {
    if (b === 0) return a

    return gcd(b, a % b)
  }

  const maxPointsOnALineContainingPointI = (i: number): number => {
    let count = 1
    let duplicates = 0
    let horisontal_lines = 1

    const map = new Map<string, number>()

    const [x1, y1] = points[i]
    for (let j = i + 1; j < points.length; j++) {
      const [x2, y2] = points[j]

      if (x1 === x2 && y1 === y2) duplicates++
      else if (y1 === y2) {
        horisontal_lines++
        count = Math.max(horisontal_lines, count)
      } else {
        const xDiff = x1 - x2
        const yDiff = y1 - y2
        const divisor = gcd(xDiff, yDiff)
        const slope = [xDiff / divisor, yDiff / divisor].join('/')

        map.set(slope, (map.get(slope) ?? 1) + 1)
        count = Math.max(count, map.get(slope)!)
      }
    }

    return count + duplicates
  }

  let result = 1
  for (let i = 0; i < points.length - 1; i++) {
    result = Math.max(result, maxPointsOnALineContainingPointI(i))
  }

  return result
}
