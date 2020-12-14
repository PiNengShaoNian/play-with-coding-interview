//https://leetcode-cn.com/problems/coin-change/

const coinChange = (coins: number[], amount: number): number => {
  const dp = Array.from({ length: amount + 1 }, () => Infinity)

  dp[0] = 0

  for (let i = 1; i <= amount; ++i) {
    for (let j = 0; j < coins.length; ++j) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount]
}
