//https://leetcode-cn.com/problems/reverse-vowels-of-a-string/

export function reverseVowels(s: string): string {
  const vowelsRE = /^[aeiouAEIOU]$/

  let i = 0
  let j = s.length - 1
  let result = [...s]

  while (i < j) {
    while (!vowelsRE.test(s[i]) && i < s.length) i++

    while (!vowelsRE.test(s[j]) && j > 0) j--

    if (i >= j) break

    const temp = result[i]
    result[i] = result[j]
    result[j] = temp
    i++
    j--
  }

  return result.join('')
}
