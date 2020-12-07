//https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
import TreeNode from '../model/TreeNode'

export function sumNumbers(root: TreeNode | null): number {
  let result = 0

  const core = (root: TreeNode | null, path: number[]): void => {
    if (!root) return

    path.push(root.val)

    if (!root.left && !root.right) {
      let num = 0
      for (let i = path.length - 1; i >= 0; i--) {
        num += path[i] * 10 ** (path.length - i - 1)
      }
      result += num
    }

    if (root.left) {
      core(root.left, path)
    }

    if (root.right) {
      core(root.right, path)
    }

    path.pop()
  }

  core(root, [])

  return result
}
