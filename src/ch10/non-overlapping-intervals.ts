//https://leetcode-cn.com/problems/non-overlapping-intervals/

export function eraseOverlapIntervals(intervals: number[][]): number {
  if (!intervals.length) return 0

  intervals.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0]

    return a[1] - b[1]
  })

  let result = 1
  const memo: number[] = Array.from({ length: intervals.length })
  memo[0] = 1

  for (let i = 1; i < intervals.length; ++i) {
    memo[i] = 1
    for (let j = 0; j < i; ++j) {
      if (intervals[i][0] >= intervals[j][1]) {
        memo[i] = Math.max(memo[i], memo[j] + 1)
      }
    }

    result = Math.max(result, memo[i])
  }

  return intervals.length - result
}
