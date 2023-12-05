function manufacture(gifts: string[], materials: string) {
  return gifts.filter(gift => {
    return gift.split('').every(letter => {
      return materials.includes(letter)
    })
  })
}

const gifts1 = ['tren', 'oso', 'pelota']
const materials1 = 'tronesa'
console.log(manufacture(gifts1, materials1)) // ["tren", "oso"]

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'
console.log(manufacture(gifts2, materials2)) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials4 = 'psli'
console.log(manufacture(gifts3, materials4)) // []
