export const binarySearch = (nums: number[], target: number): number => {
  let low = 0
  let hi = nums.length - 1

  while (low <= hi) {
    const mid = low + ((hi - low) >> 1)
    if (nums[mid] === target) return mid
    else if (nums[mid] > target) {
      hi = mid - 1
    } else low = mid + 1
  }

  return -1
}
