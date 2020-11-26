//https://leetcode-cn.com/problems/sort-characters-by-frequency/

export function frequencySort(s: string): string {
  const map: [string, number][] = Array.from({ length: 256 }, (_, i) => [
    String.fromCharCode(i),
    0,
  ])

  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i)][1]++
  }

  map.sort((a, b) => b[1] - a[1])

  let result = ''

  for (let i = 0; i < map.length; i++) {
    let [char, count] = map[i]
    let str = ''
    while (count) {
      str += char
      count--
    }

    result += str
  }

  return result
}
