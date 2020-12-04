import TreeNode from '../model/TreeNode'

export function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = []
  if (!root) return result

  const core = (root: TreeNode, path: number[]): void => {
    path.push(root.val)
    if (!root.left && !root.right) {
      result.push(path.join('->'))
    } else {
      if (root.left) {
        core(root.left, path)
      }

      if (root.right) {
        core(root.right, path)
      }
    }
    path.pop()
  }

  core(root, [])
  return result
}
