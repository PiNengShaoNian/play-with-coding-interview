//https://leetcode-cn.com/problems/sum-of-left-leaves/

import TreeNode from '../model/TreeNode'

export function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0

  const core = (site: 'left' | 'right', root: TreeNode | null): number => {
    let result = 0
    if (!root) return 0

    if (site === 'left' && root && !root.left && !root.right) {
      result += root.val
    }

    result += core('left', root.left)
    result += core('right', root.right)

    return result
  }

  return core('left', root.left) + core('right', root.right)
}
