//https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

import TreeNode from '../model/TreeNode'

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || !p || !q) return null

  let big: TreeNode
  let small: TreeNode
  if (p.val > q.val) {
    big = p
    small = q
  } else {
    big = q
    small = p
  }
  if (root.val <= small.val) {
    if (root.val === small.val) return small
    return lowestCommonAncestor(root.right, p, q)
  } else if (root.val >= big.val) {
    if (root.val === big.val) return big
    return lowestCommonAncestor(root.left, p, q)
  } else if (root.val > small.val && root.val < big.val) {
    return root
  }

  return null
}
