//https://leetcode-cn.com/problems/palindrome-partitioning/

export function partition(s: string): string[][] {
  const result: string[][] = []

  if (!s) return result

  const isPalindrome = (s: string, l: number, r: number): boolean => {
    let result = true

    while (l < r) {
      if (s[l++] !== s[--r]) {
        result = false
        break
      }
    }

    return result
  }

  const core = (s: string, start: number, p: string[]) => {
    if (start === s.length) {
      result.push(p)
      return
    }

    for (let i = start + 1; i <= s.length; ++i) {
      if (isPalindrome(s, start, i)) {
        const str = s.slice(start, i)

        core(s, start + str.length, [...p, str])
      }
    }
  }

  core(s, 0, [])

  return result
}
