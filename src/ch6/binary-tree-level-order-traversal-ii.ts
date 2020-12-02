//https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/

import LinkedList from '../util/LinkedList'

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export function levelOrderBottom(root: TreeNode | null): number[][] {
  let result: number[][] = []

  if (!root) return result

  const list = new LinkedList<number[]>()

  const bfs = (node: TreeNode, depth: number): void => {
    if (depth === list.size()) {
      list.addFirst([])
    }

    list.get(list.size() - depth - 1)!.push(node.val)

    if (node.left) {
      bfs(node.left, depth + 1)
    }

    if (node.right) {
      bfs(node.right, depth + 1)
    }
  }

  bfs(root, 0)

  for (const nums of list) {
    result.push(nums)
  }

  return result
}
