//https://leetcode-cn.com/problems/binary-tree-preorder-traversal/

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

type Command = {
  command: 'go' | 'print'
  node: TreeNode
}

export function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []
  if (!root) return result

  const stack: Command[] = []

  stack.push({
    command: 'go',
    node: root,
  })

  while (stack.length) {
    const { node, command } = stack.pop()!

    if (command === 'go') {
      stack.push({
        command: 'print',
        node,
      })
      if (node.right) {
        stack.push({
          command: 'go',
          node: node.right,
        })
      }

      if (node.left) {
        stack.push({
          command: 'go',
          node: node.left,
        })
      }
    } else {
      result.push(node.val)
    }
  }

  return result
}
