//https://leetcode-cn.com/problems/invert-binary-tree/

import TreeNode from '../model/TreeNode'

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  invertTree(root.left)
  invertTree(root.right)

  const temp = root.left
  root.left = root.right
  root.right = temp

  return root
}
