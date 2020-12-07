//https://leetcode-cn.com/problems/delete-node-in-a-bst/

import TreeNode from '../model/TreeNode'

export function deleteNode(
  root: TreeNode | null,
  key: number
): TreeNode | null {
  if (!root) return root

  const min = (root: TreeNode): TreeNode => {
    if (!root.left) return root

    return min(root.left)
  }

  const deleteMin = (root: TreeNode): TreeNode | null => {
    if (!root.left) return root.right

    root.left = deleteMin(root.left)
    return root
  }

  const deleteNode = (root: TreeNode | null, key: number): null | TreeNode => {
    if (!root) return null
    const cmp = key - root.val

    if (cmp > 0) {
      root.right = deleteNode(root.right, key)
    } else if (cmp < 0) {
      root.left = deleteNode(root.left, key)
    } else {
      if (!root.left) return root.right

      if (!root.right) return root.left

      const minNode = min(root.right)
      root.val = minNode.val
      root.right = deleteMin(root.right)
    }
    return root
  }

  root = deleteNode(root, key)

  return root
}
