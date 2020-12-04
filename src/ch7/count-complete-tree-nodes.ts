//https://leetcode-cn.com/problems/count-complete-tree-nodes/

import TreeNode from '../model/TreeNode'

export function countNodes(root: TreeNode | null): number {
  const getDepth = (root: TreeNode | null) => {
    if (!root) return 0

    let res = 0

    while (root) {
      res++
      root = root.left
    }

    return res
  }

  let result = 0
  while (root) {
    const leftDepth = getDepth(root.left)
    const rightDepth = getDepth(root.right)

    if (leftDepth === rightDepth) {
      result += 2 ** leftDepth
      root = root.right
    } else {
      result += 2 ** rightDepth
      root = root.left
    }
  }

  return result
}
