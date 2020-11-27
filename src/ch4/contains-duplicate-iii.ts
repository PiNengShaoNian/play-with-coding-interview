import TreeMap from '../util/tree-map'

export function containsNearbyAlmostDuplicate(
  nums: number[],
  k: number,
  t: number
): boolean {
  const map = new TreeMap<number, void>()

  let result = false
  for (let i = 0; i < nums.length; i++) {
    if (
      map.ceiling(nums[i] - t) !== null &&
      map.ceiling(nums[i] - t)! <= nums[i] + t
    ) {
      result = true
      break
    }

    map.put(nums[i])
    if (map.size() === k + 1) {
      map.delete(nums[i - k])
    }
  }
  return result
}

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0))
