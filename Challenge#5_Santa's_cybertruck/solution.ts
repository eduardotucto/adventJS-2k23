function cyberReindeer(road: string, time: number) {
  const timeToOpen = 5
  const resp = [road]

  let newRoad = road.split('')
  let sledPosition = newRoad.indexOf('S')
  let current = '.'

  for (let i = 1; i <= time - 1; i++) {
    if (timeToOpen === i) {
      newRoad = newRoad.map(el => (el === '|' ? '*' : el))
    }

    const nextStep = newRoad[sledPosition + 1]
    if(nextStep !== '|') {
      newRoad[sledPosition] = current
      current = nextStep
      newRoad[++sledPosition] = 'S'
    }

    resp.push(newRoad.join(''))
  }
  return resp
}


const road = 'S..|...|..'
const time = 10 // units of time
const result = cyberReindeer(road, time)
console.log(result)