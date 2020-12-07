//https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/

import TreeNode from '../model/TreeNode'

class TreeNodeWithSize {
  public size = 0
  constructor(
    public val: number,
    public left: null | TreeNodeWithSize = null,
    public right: null | TreeNodeWithSize = null
  ) {}
}
export function kthSmallest(root: TreeNode | null, k: number): number {
  const countNode = (root: TreeNodeWithSize | null): number => {
    if (!root) return 0
    root.size = countNode(root.left) + countNode(root.right) + 1

    return root.size
  }

  countNode(root as TreeNodeWithSize)

  const core = (root: TreeNodeWithSize, k: number): number => {
    const leftTreeSize = root.left ? root.left.size : 0
    const cmp = k - leftTreeSize - 1
    if (cmp < 0) {
      return core(root.left!, k)
    } else if (cmp > 0) {
      return core(root.right!, k - leftTreeSize - 1)
    } else return root.val
  }

  return core(root as TreeNodeWithSize, k)
}
