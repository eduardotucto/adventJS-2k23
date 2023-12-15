
/*
// Points earned: 70
function checkIsValidCopy(original: string, copy: string) {
  if(original.length !== copy.length) return false

  for (let i = 0; i < original.length; i++) {
    const letter = original[i]
    const letterOfCopy = copy[i]

    if (letter === ' ' && letterOfCopy !== ' ') return false

    const val1 = ['.']
    const val2 = [':', ...val1]
    const val3 = ['+', ...val2]
    const val4 = ['#', ...val3]

    const validations: Record<string, string[]> = {
      ':': val1,
      '+': val2,
      '#': val3,
    }

    const isUpperCase = letter === letter.toUpperCase()
    let isValid
    if (isUpperCase) {
      isValid = [letter.toLowerCase(), letter, ' ', ...(validations[letter] || val4)].includes(letterOfCopy)
    } else {
      isValid = [letter, letter, ' ', ...(validations[letter] || val4)].includes(letterOfCopy)
    }
    if(!isValid) return false
  }

  return true
}
*/

function checkIsValidCopy(original: string, copy: string) {
  if (original.length !== copy.length) return false

  const charValidations: Record<string, string[]> = {
    ':': ['.'],
    '+': [':', '.'],
    '#': ['+', ':', '.'],
  }

  for (let i = 0; i < original.length; i++) {
    const originalChar = original[i]
    const copyChar = copy[i]

    if (originalChar === ' ' && copyChar !== ' ') return false

    const isUpperCase = originalChar === originalChar.toUpperCase()
    const validChars = isUpperCase
      ? [originalChar.toLowerCase(), originalChar, ' ']
      : [originalChar, ' ']

    const customValidations = charValidations[originalChar] || ['#', '+', ':', '.']
    const charValidationsTotal = [...validChars, ...customValidations]

    if (!charValidationsTotal.includes(copyChar)) return false
  }

  return true
}



console.log(
  checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#'),
  // true
  '\n',
  checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#'),
  // false (for the initial p)
  '\n',
  checkIsValidCopy('Santa Claus', 's#+:. c:. s'),
  // true
  '\n',
  checkIsValidCopy('Santa Claus', 's#+:.#c:. s'),
  // false (there is a # where it should not be)
  '\n',
  checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s'),
  // false
  '\n',
  checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s'),
  // true
)
