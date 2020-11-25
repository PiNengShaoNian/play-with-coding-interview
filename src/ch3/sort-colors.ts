export function sortColors(nums: number[]): void {
  const swap = (arr: any[], i: number, j: number): void => {
    const t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }

  let zero = -1
  let two = nums.length
  let i = 0

  while (i < two) {
    if (nums[i] === 1) {
      i++
    } else if (nums[i] === 0) {
      zero++
      swap(nums, zero, i)
      i++
    } else {
      two--
      swap(nums, i, two)
    }
  }
}

export function sortColors1(nums: number[]): void {
  const counts: [zero: number, one: number, two: number] = [0, 0, 0]

  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]]++
  }

  let i = 0
  for (let [num, count] of Object.entries(counts)) {
    while (count) {
      nums[i++] = +num
      count--
    }
  }
}
