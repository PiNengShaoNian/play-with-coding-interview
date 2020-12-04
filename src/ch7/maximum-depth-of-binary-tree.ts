//https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

import TreeNode from '../model/TreeNode'

export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
