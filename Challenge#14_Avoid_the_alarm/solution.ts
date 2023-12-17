function maxGifts(houses: number[]) {
  const n = houses.length

  const dp = new Array(n)

  dp[0] = houses[0]
  dp[1] = Math.max(houses[0], houses[1])

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i])
  }

  return dp[n - 1]
}

console.log(maxGifts([2, 4, 2]))          // 4
console.log(maxGifts([5, 1, 1, 5]))       // 10
console.log(maxGifts([4, 1, 1, 4, 2, 1])) // 9
console.log(maxGifts([1, 3, 1, 3, 100]))  // 103
