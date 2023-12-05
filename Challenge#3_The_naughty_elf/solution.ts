function findNaughtyStep(original: string, modified: string) {
  const originalLength = original.length
  const modifiedLength = modified.length

  if(originalLength === 0) return modified[0] || ''
  if(originalLength === modifiedLength) return ''

  const stringToWorkOn = originalLength > modifiedLength ? original : modified
  const stringToCompare = stringToWorkOn === original ? modified : original

  const findWrongStep = stringToWorkOn.split('').filter((letter, i) => {
    return letter !== stringToCompare[i]
  })
  return findWrongStep[0] || stringToCompare[stringToCompare.length - 1]
}

const original1 = 'abcd'
const modified1 = 'abcde'
console.log(findNaughtyStep(original1, modified1)) // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
console.log(findNaughtyStep(original2, modified2)) // 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
console.log(findNaughtyStep(original3, modified3)) // ''

const original4 = 'xxxx'
const modified4 = 'xxoxx'
console.log(findNaughtyStep(original4, modified4)) // 'o'