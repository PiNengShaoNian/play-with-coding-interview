export const solution = (points: [number, number][]): number => {
  let result = 0

  const distance = (p1: [number, number], p2: [number, number]): number => {
    const [x1, y1] = p1
    const [x2, y2] = p2

    return (x1 - x2) ** 2 + (y1 - y2) ** 2
  }
  
  for (let i = 0; i < points.length; i++) {
    const map = new Map<number, number>()

    for (let j = 0; j < points.length; j++) {
      if (j === i) continue
      const dis = distance(points[i], points[j])
      if (!map.has(dis)) {
        map.set(dis, 1)
      } else {
        map.set(dis, map.get(dis)! + 1)
      }
    }

    for (const count of map.values()) {
      if (count >= 2) {
        result += count * (count - 1)
      }
    }
  }
  return result
}
