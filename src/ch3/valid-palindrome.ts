// https://leetcode-cn.com/problems/valid-palindrome/

export function isPalindrome(s: string): boolean {
  const validCharRE = /^[a-zA-Z0-9]$/

  let i = 0
  let j = s.length - 1
  let result = true

  while (i < j) {
    while (!validCharRE.test(s[i]) && i < j) i++

    while (!validCharRE.test(s[j]) && j > i) j--

    if (s[i].toUpperCase() === s[j].toUpperCase()) {
      i++
      j--
    } else {
      result = false
      break
    }
  }

  return result
}

console.log(isPalindrome('race a car'))
