//https://leetcode-cn.com/problems/balanced-binary-tree/

import TreeNode from '../model/TreeNode'

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

export function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true

  const core = (left: TreeNode | null, right: TreeNode | null): boolean => {
    const leftDepth = maxDepth(left)
    const rightDpeth = maxDepth(right)

    let result = true

    if (Math.abs(leftDepth - rightDpeth) > 1) result = false

    if (result && left) {
      result = core(left.left, left.right)
    }

    if (result && right) {
      result = core(right.left, right.right)
    }

    return result
  }

  return core(root.left, root.right)
}
