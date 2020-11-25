function findKthLargest(nums: number[], k: number): number {
  const swap = (i: number, j: number): void => {
    const t = nums[i]
    nums[i] = nums[j]
    nums[j] = t
  }
  const partition = (low: number, hi: number): number => {
    const v = nums[low]

    let i = low
    let j = hi + 1
    while (true) {
      while (nums[++i] < v) if (i >= hi) break

      while (nums[--j] > v) if (j <= low) break

      if (i >= j) break

      swap(i, j)
    }

    swap(low, j)
    return j
  }

  let low = 0
  let hi = nums.length - 1
  let index
  k = nums.length - k

  do {
    index = partition(low, hi)

    if (index > k) {
      hi = index - 1
    } else if (index < k) {
      low = index + 1
    }
  } while (index !== k)

  return nums[index]
}
