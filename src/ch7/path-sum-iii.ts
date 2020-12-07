//https://leetcode-cn.com/problems/path-sum-iii/

import TreeNode from '../model/TreeNode'

export function pathSum(root: TreeNode | null, sum: number): number {
  if (!root) return 0

  const core = (root: TreeNode | null, num: number): number => {
    if (!root) return 0

    let res = 0

    if (num === root.val) res++

    res += core(root.left, num - root.val)
    res += core(root.right, num - root.val)

    return res
  }

  let res = 0

  res += core(root, sum)
  res += pathSum(root.left, sum)
  res += pathSum(root.right, sum)

  return res
}
