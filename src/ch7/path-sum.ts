//https://leetcode-cn.com/problems/path-sum/

import TreeNode from '../model/TreeNode'

export function hasPathSum(root: TreeNode | null, sum: number): boolean {
  if (!root) return false
  const core = (root: TreeNode, curSum: number): boolean => {
    if (curSum + root.val === sum && !root.left && !root.right) return true

    let result = false
    if (root.left) {
      result = core(root.left, curSum + root.val)
    }

    if (!result && root.right) {
      result = core(root.right, curSum + root.val)
    }

    return result
  }

  return core(root, 0)
}
