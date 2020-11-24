// https://leetcode-cn.com/problems/remove-element/

export function removeElement(nums: number[], val: number): number {
  let res = 0
  let k = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i]
      res++
    }
  }

  return res
}
