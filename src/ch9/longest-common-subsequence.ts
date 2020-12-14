export function longestCommonSubsequence(text1: string, text2: string): number {
  const dp: number[][] = Array.from({ length: text1.length + 1 }, () =>
    Array.from({ length: text2.length + 1 }, () => 0)
  )

  for (let i = 0; i < text1.length; i++) {
    for (let j = 0; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1])
      }
    }
  }

  return dp[text1.length][text2.length]
}
