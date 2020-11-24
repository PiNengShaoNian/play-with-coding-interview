/*
https://leetcode-cn.com/problems/move-zeroes/
*/

export function moveZeroes(nums: number[]): void {
  const nonZeroes: number[] = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nonZeroes.push(nums[i])
  }

  for (let i = 0; i < nonZeroes.length; i++) {
    nums[i] = nonZeroes[i]
  }

  for (let i = nonZeroes.length; i < nums.length; i++) {
    nums[i] = 0
  }
}

export function moveZeroes1(nums: number[]): void {
  let k = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[k++] = nums[i]
    }
  }

  for (let i = k; i < nums.length; i++) {
    nums[i] = 0
  }
}
