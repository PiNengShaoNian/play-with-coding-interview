//https://leetcode-cn.com/problems/validate-binary-search-tree/

import TreeNode from '../model/TreeNode'

export function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true

  let prev: null | TreeNode = null
  let result = true
  const inorder = (root: TreeNode | null): boolean => {
    if (!root) return false

    if (inorder(root.left)) return true
    if (prev) {
      if (prev.val >= root.val) {
        result = false
        return true
      } else prev = root
    } else {
      prev = root
    }
    if (inorder(root.right)) return true

    return false
  }

  inorder(root)

  return result
}
