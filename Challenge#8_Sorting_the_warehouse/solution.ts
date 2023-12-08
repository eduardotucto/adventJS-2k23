
/*
// Points earned: 130
function organizeGifts(gifts: string) {
  const matchNumber: any[] = gifts.match(/(\d+)/g) || []
  const matchWord: string[] = gifts.match(/([a-z]+)/g) || []
  let resp = ''
  matchNumber.forEach((number, i) => {
    const boxesCount = Math.floor(number / 10)
    const palletsCount = Math.floor(boxesCount / 5)
    const remainingGifts = number % 10
    const remainingBoxes = boxesCount % 5
    resp =
      resp +
      `[${matchWord[i]}]`.repeat(palletsCount) +
      `{${matchWord[i]}}`.repeat(remainingBoxes) +
      (remainingGifts > 0 ? `(${matchWord[i].repeat(remainingGifts)})` : '')
  })
  return resp
}
*/


function organizeGifts(gifts: string) {
  const matchNumber: any[] = gifts.match(/(\d+)/g) || []
  const matchWord: string[] = gifts.match(/([a-z]+)/g) || []
  const resp: string[] = []
  matchNumber.forEach((number, i) => {
    const boxesCount = Math.floor(number / 10)
    const palletsCount = Math.floor(boxesCount / 5)
    const remainingGifts = number % 10
    const remainingBoxes = boxesCount % 5
    resp.push(`[${matchWord[i]}]`.repeat(palletsCount))
    resp.push(`{${matchWord[i]}}`.repeat(remainingBoxes))
    if (remainingGifts > 0) {
      resp.push(`(${matchWord[i].repeat(remainingGifts)})`)
    }

  })
  return resp.join('')
}

const resp1 = organizeGifts("76a11b")
console.log(resp1) // [a]{a}{a}(aaaaaa){b}(b)

const resp2 = organizeGifts("20a")
console.log(resp2) // {a}{a}

const resp3 = organizeGifts("70b120a4c")
console.log(resp3) // [b]{b}{b}[a][a]{a}{a}(cccc)
