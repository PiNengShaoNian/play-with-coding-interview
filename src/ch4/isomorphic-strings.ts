//https://leetcode-cn.com/problems/isomorphic-strings/

export function isIsomorphic(s: string, t: string): boolean {
  const getUniformStr = (str: string) => {
    let count = 0
    const map = new Map<string, number>()
    let result = ''
    for (let i = 0; i < str.length; i++) {
      if (!map.has(str[i])) {
        map.set(str[i], count++)
      }
      result += map.get(str[i])
    }

    return result
  }

  return getUniformStr(s) === getUniformStr(t)
}
