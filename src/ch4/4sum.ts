//https://leetcode-cn.com/problems/4sum/submissions/

export function fourSum(nums: number[], target: number): number[][] {
  const result: number[][] = []
  const set = new Set<string>()
  nums.sort((a, b) => a - b)

  const core = (path: number[], sum: number, start: number) => {
    for (let i = start; i < nums.length; i++) {
      const nextSum = sum + nums[i]
      if (nums[i] > 0 && nextSum > target) return

      path.push(nums[i])

      if (path.length === 4) {
        if (nextSum === target) {
          const str = path.join('-')
          if (!set.has(str)) {
            result.push([path[0], path[1], path[2], path[3]])
            set.add(str)
          }
        }
      } else {
        core(path, nextSum, i + 1)
      }

      path.pop()
    }
  }

  core([], 0, 0)

  return result
}

export function fourSum1(nums: number[], target: number): number[][] {
  const result: number[][] = []

  if (nums.length < 4) return result

  nums.sort((a, b) => a - b)

  let length = nums.length
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break

    if (
      nums[i] + nums[length - 1] + nums[length - 2] + nums[length - 3] <
      target
    )
      continue

    for (let j = i + 1; j < length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue

      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break

      if (nums[i] + nums[j] + nums[length - 1] + nums[length - 2] < target)
        continue

      let r = length - 1
      let l = j + 1

      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r]

        if (sum === target) {
          result.push([nums[i], nums[j], nums[l], nums[r]])

          while (l + 1 < r && nums[l + 1] === nums[l]) l++
          while (r - 1 > l && nums[r - 1] === nums[r]) r--
          l++
          r--
        } else if (sum < target) {
          l++
        } else {
          r--
        }
      }
    }
  }

  return result
}
