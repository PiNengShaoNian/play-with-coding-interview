//https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/

import TreeNode from '../model/TreeNode'

export function sortedArrayToBST(nums: number[]): TreeNode | null {
  const core = (nums: number[], lo: number, hi: number): TreeNode | null => {
    if (lo > hi) return null
    const mid = lo + ((hi - lo) >> 1)

    const root = new TreeNode(nums[mid])
    root.left = core(nums, lo, mid - 1)
    root.right = core(nums, mid + 1, hi)

    return root
  }

  return core(nums, 0, nums.length - 1)
}
