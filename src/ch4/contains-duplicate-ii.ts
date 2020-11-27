//https://leetcode-cn.com/problems/contains-duplicate-ii/

export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const set = new Set<number>()

  let result = false
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      result = true
      break
    }

    set.add(nums[i])

    if (set.size === k + 1) {
      set.delete(nums[i - k])
    }
  }

  return result
}
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
