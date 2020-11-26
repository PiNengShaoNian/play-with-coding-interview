//https://leetcode-cn.com/problems/happy-number/

export function isHappy(n: number): boolean {
  const seen = new Set<number>()

  const nextN = (n: number): number => {
    let sum = 0
    while (n !== 0) {
      const d = n % 10
      n = Math.floor(n / 10)
      sum += d * d
    }

    return sum
  }

  while (n !== 1 && !seen.has(n)) {
    seen.add(n)
    n = nextN(n)
  }

  return n === 1
}

export function isHappy1(n: number): boolean {
  const nextN = (n: number): number => {
    let sum = 0
    while (n !== 0) {
      const d = n % 10
      n = Math.floor(n / 10)
      sum += d * d
    }

    return sum
  }

  let slow = n
  let fast = nextN(n)
  while (fast !== 1 && slow !== fast) {
    slow = nextN(slow)
    fast = nextN(nextN(fast))
  }

  return fast === 1
}
