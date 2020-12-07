//https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/

import TreeNode from '../model/TreeNode'

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || !p || !q) return null

  const collect = (
    root: TreeNode,
    path: TreeNode[],
    node: TreeNode
  ): boolean => {
    path.push(root)
    if (root.val === node.val) return true

    if (root.left) {
      if (collect(root.left, path, node)) return true
    }

    if (root.right) {
      if (collect(root.right, path, node)) return true
    }

    path.pop()
    return false
  }

  const path1: TreeNode[] = []
  const path2: TreeNode[] = []

  collect(root, path1, p)
  collect(root, path2, q)

  let i = 0

  let result: TreeNode | null = null

  while (i < path1.length && i < path2.length) {
    const node1 = path1[i]
    const node2 = path2[i]
    if (node1 === node2) {
      result = node1
      i++
    } else break
  }

  return result
}
