//https://leetcode-cn.com/problems/symmetric-tree/

import TreeNode from '../model/TreeNode'

export function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true
  const core = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (!left && !right) {
      return true
    } else if (!left || !right) {
      return false
    }

    return (
      left!.val === right!.val &&
      core(left!.left, right!.right) &&
      core(left!.right, right!.left)
    )
  }

  return core(root.left, root.right)
}

const tree = new TreeNode(1)

tree.left = new TreeNode(2)
tree.right = new TreeNode(2)

console.log(isSymmetric(tree))
