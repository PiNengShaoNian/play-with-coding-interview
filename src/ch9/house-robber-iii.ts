//https://leetcode-cn.com/problems/house-robber-iii/

import TreeNode from '../model/TreeNode'

export function rob(root: TreeNode | null): number {
  const memo = new Map<TreeNode, number>()
  const core = (root: TreeNode | null): number => {
    if (!root) return 0

    if (typeof memo.get(root) === 'number') return memo.get(root)!

    let res =
      root.val +
      core(root?.left?.left ?? null) +
      core(root?.left?.right ?? null) +
      core(root?.right?.right ?? null) +
      core(root?.right?.left ?? null)

    res = Math.max(res, core(root.left) + core(root.right))

    memo.set(root, res)

    return res
  }

  return core(root)
}
