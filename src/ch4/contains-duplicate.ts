//https://leetcode-cn.com/problems/contains-duplicate/

export function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>()

  let result = false
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      result = true
      break
    }

    set.add(nums[i])
  }

  return result
}
