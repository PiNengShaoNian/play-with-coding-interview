//https://leetcode-cn.com/problems/path-sum-ii/

import TreeNode from '../model/TreeNode'

export function pathSum(root: TreeNode | null, sum: number): number[][] {
  let result: number[][] = []

  if (!root) return result
  const core = (root: TreeNode, curSum: number, path: number[]): void => {
    path.push(root.val)
    if (curSum + root.val === sum && !root.left && !root.right) {
      result.push([...path])
    }

    if (root.left) {
      core(root.left, curSum + root.val, path)
    }

    if (root.right) {
      core(root.right, curSum + root.val, path)
    }

    path.pop()
  }

  core(root, 0, [])

  return result
}
