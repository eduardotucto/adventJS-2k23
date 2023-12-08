
/*
// Points earned: 30
function drawGift(size: number, symbol: string) {
  if(size < 2) return '#\n'
  const draw: string[] = []
  for (let i = 0; i < size - 1; i++) {
    const line =
      ' '.repeat(size - 1 - i) +
      '#' +
      (i === 0 ? '#'.repeat(size - 2) : '@'.repeat(size - 2)) +
      (i > 0 ? '#' + '@'.repeat(i - 1) : '') +
      '#\n'
    draw.push(line)
  }
  const drawReverted = [...draw]
                            .reverse()
                            .map(line => line.replaceAll(' ', ''))
  draw.push('#'.repeat(size) + '@'.repeat(size - 2) + '#\n')
  return (draw.join('') + drawReverted.join('')).replaceAll('@', symbol)
}
*/

/*
// Points earned: 10
function drawGift(size: number, symbol: string) {
  if(size < 2) return '#\n'
  let draw = ''
  for (let i = 1; i <= 2 * size - 1; i++) {
    draw = draw +
      ((size - i > 0) ? ' '.repeat(size - i) : '') +
      '#' +
      (i === 1 || i === size || i === (2 * size - 1) ? '#'.repeat(size - 2) : symbol.repeat(size - 2)) +
      '#' +
      (i > 1 && i <= size ? symbol.repeat(i - 2) + '#' :
      i > 1 && i < (2 * size - 1) ? symbol.repeat(2 * size - 2 - i) + '#' : '') +
      '\n'
  }
  return draw
}
*/

function drawGift(size: number, symbol: string) {
  if(size < 2) return '#\n'
  let top = []
  let bottom = []
  const symbolRepeat = symbol.repeat(size - 2)
  const hashRepeat = '#'.repeat(size - 2)
  for (let i = 0; i < size - 1; i++) {
    const spacing = ' '.repeat(size - 1 - i)
    let process = ''
    if(i) {
      process = `#${symbolRepeat}#${symbol.repeat(i - 1)}#\n`
    } else {
      process = '#' + hashRepeat + '#\n'
    }
    top.push(spacing + process)
    bottom.unshift(process)
  }
  top.push(`${'#'.repeat(size)}${symbolRepeat}#\n`)
  return [...top, ...bottom].join('')
}


console.log(drawGift(4, '+'))
/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, '*'))
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, '^'))
/*
#
*/

console.log(drawGift(10, ' '))
/*
#
*/