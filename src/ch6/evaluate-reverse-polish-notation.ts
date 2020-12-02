//https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/

export function evalRPN(tokens: string[]): number {
  const nums: number[] = []

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === '+') {
      const num2 = nums.pop()!
      const num1 = nums.pop()!

      nums.push(num1 + num2)
    } else if (tokens[i] === '-') {
      const num2 = nums.pop()!
      const num1 = nums.pop()!

      nums.push(num1 - num2)
    } else if (tokens[i] === '*') {
      const num2 = nums.pop()!
      const num1 = nums.pop()!

      nums.push(num1 * num2)
    } else if (tokens[i] === '/') {
      const num2 = nums.pop()!
      const num1 = nums.pop()!

      nums.push((num1 / num2) | 0)
    } else {
      nums.push(+tokens[i])
    }
  }

  return nums[0]
}

debugger
console.log(
  evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])
)
