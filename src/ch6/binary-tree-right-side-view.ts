import TreeNode from '../model/TreeNode'
import LoopQueue from '../util/LoopQueue'

type NodeWithDepth = [node: TreeNode, depth: number]

export function rightSideView(root: TreeNode | null): number[] {
  const result: number[] = []

  if (!root) return result

  const queue = new LoopQueue<NodeWithDepth>()

  queue.enqueue([root, 0])

  while (queue.size()) {
    const [node, depth] = queue.dequeue()!

    result[depth] = node.val

    if (node.left) {
      queue.enqueue([node.left, depth + 1])
    }

    if (node.right) {
      queue.enqueue([node.right, depth + 1])
    }
  }

  return result
}
