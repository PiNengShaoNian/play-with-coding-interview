//https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/

import TreeNode from '../model/TreeNode'
import Deque from '../util/Deque'

type NodeWithDepth = [node: TreeNode, depth: number]

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = []

  if (!root) return result

  const queue = new Deque<NodeWithDepth>()

  queue.addLast([root, 0])
  const result1: Deque<number>[] = []

  while (queue.size()) {
    const [node, depth] = queue.removeFront()!

    if (result1.length === depth) {
      result1[depth] = new Deque()
    }

    if (depth % 2 == 0) {
      result1[depth].addFront(node.val)
    } else {
      result1[depth].addLast(node.val)
    }
    if (node.left) {
      queue.addLast([node.left, depth + 1])
    }

    if (node.right) {
      queue.addLast([node.right, depth + 1])
    }
  }

  for (let i = 0; i < result1.length; i++) {
    result[i] = [...result1[i]]
  }

  return result
}
