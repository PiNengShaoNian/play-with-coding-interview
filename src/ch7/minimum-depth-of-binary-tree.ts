//https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/

import TreeNode from '../model/TreeNode'

export function minDepth(root: TreeNode | null): number {
  if (!root) return 0

  const left = minDepth(root.left)
  const right = minDepth(root.right)

  let result = 0

  if (left === 0 || right === 0) {
    result = left + right + 1
  } else {
    result = Math.min(left, right) + 1
  }

  return result
}
