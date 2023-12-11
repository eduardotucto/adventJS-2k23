function adjustLights(lights: any[]) {
  const vault1 = []
  const vault2 = []
  let nextColorisRed = false
  for (const light of lights) {
    const isWrong = nextColorisRed ? light === '🟢' : light === '🔴'
    if(isWrong) {
      vault1.push(light)
    } else {
      vault2.push(light)
    }
    nextColorisRed = !nextColorisRed
  }
  return Math.min(vault1.length, vault2.length)
}

console.log(
  adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']),
  // -> 1 (you change the fourth light to 🔴)
  '\n',
  adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']),
  // -> 2 (you change the second light to 🟢 and the third to 🔴)
  '\n',
  adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']),
  // -> 0 (they are already alternating)
  '\n',
  adjustLights(['🔴', '🔴', '🔴']),
  // -> 1 (you change the second light to 🟢)
  '\n',
  adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢', '🔴', '🟢']),
  // -> 1 (you change the first light to 🟢)
  '\n',
  adjustLights(['🟢', '🟢', '🔴', '🟢', '🔴', '🟢'])
  // -> 1 (you change the first light to 🔴)
)