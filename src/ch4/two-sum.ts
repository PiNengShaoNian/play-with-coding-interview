//https://leetcode-cn.com/problems/two-sum/

export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>()

  let result: number[] = []

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      result = [map.get(target - nums[i])!, i]
      break
    }

    map.set(nums[i], i)
  }

  return result
}
