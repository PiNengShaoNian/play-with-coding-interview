//https://leetcode-cn.com/problems/binary-watch/

export function readBinaryWatch(num: number): string[] {
  const result: string[] = []
  const hoursNum = [1, 2, 4, 8]
  const minutesNum = [1, 2, 4, 8, 16, 32]

  const subsets = (
    nums: number[],
    n: number,
    begin: number,
    path: number[],
    sum: number,
    max: number,
    result: number[]
  ): void => {
    if (path.length > n) return

    if (path.length === n) {
      result.push(sum)

      return
    }

    for (let i = begin; i < nums.length; ++i) {
      if (sum + nums[i] >= max) return
      path.push(nums[i])
      subsets(nums, n, i + 1, path, sum + nums[i], max, result)
      path.pop()
    }
  }

  for (let i = 0; i < hoursNum.length; ++i) {
    const hCount = i
    const mCount = num - i

    if (mCount < 0) break

    const hSets: number[] = []
    subsets(hoursNum, hCount, 0, [], 0, 12, hSets)

    const mSets: number[] = []
    subsets(minutesNum, mCount, 0, [], 0, 60, mSets)

    for (let h = 0; h < hSets.length; ++h) {
      for (let m = 0; m < mSets.length; ++m) {
        result.push(hSets[h] + ':' + (mSets[m] + '').padStart(2, '0'))
      }
    }
  }

  return result
}

console.log(readBinaryWatch(2))
