function createChristmasTree(ornaments: string, height: number) {
  const resp = []
  const totalCaractersNeeded = height * (height + 1) / 2
  const repeatTimes = totalCaractersNeeded / ornaments.length
  let wordToWork = ornaments.repeat(Math.ceil(repeatTimes))
  for (let i = 0; i < height; i++) {
    resp.push(' '.repeat(height - 1 - i))
    wordToWork = wordToWork.substring(i)
    const treeSection = wordToWork.slice(0, i + 1)
    resp.push(treeSection.split('').join(' '))
    resp.push('\n')
  }
  resp.push(' '.repeat(height - 1) + '|\n')
  return resp.join('')
}

//  *
// @ o
//* @ o
//  |

//    1
//   2 3
//  1 2 3
// 1 2 3 1
//2 3 1 2 3
//    |

//   x
//  o x
// o x o
//x o x o
//   |
