function findFirstRepeated(gifts: number[]): number {
  const giftIndices: { [key: number]: number } = {}

  let firstNumberRepeated = -1

  gifts.some((giftId, i) => {
    if (giftIndices.hasOwnProperty(giftId)) {
      firstNumberRepeated = giftId
      return true
    } else {
      giftIndices[giftId] = i
    }
  })

  return firstNumberRepeated
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log('giftIds', firstRepeatedId) // 3

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log('giftIds2', firstRepeatedId2) // -1

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log('giftIds3', firstRepeatedId3) // 5
