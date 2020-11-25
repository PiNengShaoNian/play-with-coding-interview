export function minWindow(s: string, t: string): string {
  if (s.length < t.length) return ''
  const freS = Array.from({ length: 58 }, () => 0)
  const freT = Array.from({ length: 58 }, () => 0)
  let result: [number, number] = [s.length, s.length * 2 + 1]

  for (let i = 0; i < t.length; i++) {
    freT[t.charCodeAt(i) - 65]++
  }

  const contain = (): boolean => {
    let result = true

    for (let i = 0; i < 58; i++) {
      if (freS[i] < freT[i]) {
        result = false
        break
      }
    }

    return result
  }

  let r = -1
  let l = 0

  while (r < s.length) {
    freS[s.charCodeAt(++r) - 65]++

    while (contain()) {
      const [left, right] = result
      if (r - l < right - left) {
        result[0] = l
        result[1] = r
      }
      freS[s.charCodeAt(l++) - 65]--
    }
  }

  return s.slice(result[0], result[1] + 1)
}
