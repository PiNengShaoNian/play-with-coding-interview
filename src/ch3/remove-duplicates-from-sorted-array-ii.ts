//https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/

export function removeDuplicates(nums: number[]): number {
  let res = 0

  for (let i = 0; i < nums.length; i++) {
    if (res < 2 || nums[i] > nums[res - 2]) {
      nums[res++] = nums[i]
    }
  }

  return res
}

const arr = [1, 1, 1, 2, 2, 3]
console.log(removeDuplicates(arr))
console.log(arr)
