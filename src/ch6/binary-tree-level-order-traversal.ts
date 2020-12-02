import LoopQueue from '../util/LoopQueue'

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

type NodeWithLevel = [node: TreeNode, level: number]

export function levelOrder(root: TreeNode | null): number[][] {
  let result: number[][] = []

  if (!root) return result

  const queue = new LoopQueue<NodeWithLevel>()

  queue.enqueue([root, 0])

  while (queue.size()) {
    const [node, level] = queue.dequeue()!

    if (level === result.length) {
      result[level] = []
    }

    result[level].push(node.val)

    if (node.left) {
      queue.enqueue([node.left, level + 1])
    }

    if (node.right) {
      queue.enqueue([node.right, level + 1])
    }
  }

  return result
}
