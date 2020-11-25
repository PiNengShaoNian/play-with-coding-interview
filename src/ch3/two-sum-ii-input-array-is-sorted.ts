//https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/

export function twoSum(numbers: number[], target: number): number[] {
  let i = 0
  let j = numbers.length - 1

  while (i < j) {
    const sum = numbers[i] + numbers[j]

    if (sum === target) break
    else if (sum > target) j--
    else {
      i++
    }
  }

  return [i + 1, j + 1]
}
