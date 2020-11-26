//https://leetcode-cn.com/problems/3sum/submissions/

export function threeSum(nums: number[]): number[][] {
  let result: number[][] = []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let l = i + 1
    let r = nums.length - 1
    let target = -nums[i]

    while (l < r) {
      const sum = nums[l] + nums[r]

      if (sum === target) {
        result.push([nums[i], nums[l], nums[r]])

        while (l + 1 < r && nums[l] === nums[l + 1]) l++

        while (r - 1 > l && nums[r - 1] === nums[r]) r--

        l++
        r--
      } else if (sum > target) {
        r--
      } else {
        l++
      }
    }
  }

  return result
}
