//https://leetcode-cn.com/problems/minimum-size-subarray-sum/
export function maxArea(height: number[]): number {
  let result = -Infinity

  let i = 0
  let j = height.length - 1

  while (i < j) {
    const height1 = height[i]
    const height2 = height[j]

    const area = (j - i) * Math.min(height1, height2)

    if (area > result) result = area

    if (height1 < height2) {
      i++
    } else {
      j--
    }
  }

  return result
}
