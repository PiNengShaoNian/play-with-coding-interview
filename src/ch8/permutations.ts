//https://leetcode-cn.com/problems/permutations/

export function permute(nums: number[]): number[][] {
  const used = Array.from({ length: nums.length }, () => false)
  const ele: number[] = []
  const result: number[][] = []

  const core = (n: number) => {
    if (n === nums.length) {
      result.push([...ele])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        ele[n] = nums[i]
        used[i] = true
        core(n + 1)
        used[i] = false
      }
    }
  }

  core(0)

  return result
}
