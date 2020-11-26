export function threeSumClosest(nums: number[], target: number): number {
  let result = Infinity

  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1
    let r = nums.length - 1

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]

      if (sum < target) {
        l++
      } else {
        r--
      }

      if (Math.abs(result - target) > Math.abs(sum - target)) {
        result = sum
      }
    }
  }

  return result
}
