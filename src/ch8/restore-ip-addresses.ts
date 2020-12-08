//https://leetcode-cn.com/problems/restore-ip-addresses/

export function restoreIpAddresses(s: string): string[] {
  let result: string[] = []
  if (!s || s.length > 12 || s.length < 4) return result
  const segments: number[] = []

  const core = (s: string, segId: number, segStart: number): void => {
    if (segId === 4) {
      if (segStart === s.length) result.push(segments.join('.'))
      else return
    }

    if (segStart === s.length) return

    if (s[segStart] === '0') {
      segments[segId] = 0
      core(s, segId + 1, segStart + 1)
    }

    let addr = 0
    for (let i = segStart; i < s.length; ++i) {
      addr = addr * 10 + +s[i]

      if (addr > 0 && addr <= 0xff) {
        segments[segId] = addr
        core(s, segId + 1, i + 1)
      } else break
    }
  }

  core(s, 0, 0)

  return result
}

debugger
console.log(restoreIpAddresses('172162541'))
