//https://leetcode-cn.com/problems/same-tree/

import TreeNode from '../model/TreeNode'

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true
  else if ((p && !q) || (!p && q)) return false
  else if (p!.val !== q!.val) return false

  let result: boolean = true

  result = isSameTree(p!.left, q!.left)

  if (result) {
    result = isSameTree(p!.right, q!.right)
  }

  return result
}
