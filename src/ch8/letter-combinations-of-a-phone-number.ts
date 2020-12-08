//https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

export function letterCombinations(digits: string): string[] {
  const result: string[] = []
  if (!digits) return result
  const numberToChars: string[][] = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
  ]

  const core = (digits: string, index: number, str: string): void => {
    if (index === digits.length) {
      result.push(str)
      return
    }

    const chars = numberToChars[+digits[index]]

    for (let i = 0; i < chars.length; i++) {
      core(digits, index + 1, str + chars[i])
    }
  }

  core(digits, 0, '')
  return result
}
