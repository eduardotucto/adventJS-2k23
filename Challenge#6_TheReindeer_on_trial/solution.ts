function maxDistance(movements:string) {
  let sum = 0
  let freeMovements = 0
  for(const movement of movements) {
    if(movement === '>') sum++
    else if(movement === '<') sum--
    else if(movement === '*') freeMovements++
  }

  return Math.abs(sum) + freeMovements
}

const movements = '>>*<'
const result1 = maxDistance(movements)
console.log(result1) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
