//https://leetcode-cn.com/problems/simplify-path/

function simplifyPath(path: string): string {
  let index = 0
  const stack: string[] = []
  const charsRE = /^[a-zA-Z]$/
  let result = ''

  while (index < path.length) {
    let subPathStart = index

    while (path[index] === '/') index++

    if (index - subPathStart > 1) {
      subPathStart = index - 1
    }

    if (charsRE.test(path[index])) {
      while (charsRE.test(path[index]) && index + 1 < path.length) index++

      const subPath = path.substring(subPathStart, index)

      stack.push(subPath)
    }

    if (
      index + 1 < path.length &&
      path[index] === '.' &&
      path[index + 1] === '/'
    ) {
      index += 2
    } else if (index + 1 < path.length && path.substr(index, 2) === '..') {
      stack.pop()
      index += 2
    } else if (path[index] === '.') index++
  }

  if (stack.length) {
    result = stack.join('')
  } else result = '/'

  return result
}
