function getIndexsForPalindrome(word: string) {
  if (word === word.split('').reverse().join('')) return []

  let modifiedWord = word

  for (let i = 0; i < modifiedWord.length; i++) {
    const currentChar = modifiedWord[i]
    const antipodalChar = modifiedWord[modifiedWord.length - 1 - i]

    if (currentChar === antipodalChar) continue

    const splitModifiedWord = modifiedWord.split('')
    const antipodalIndex = splitModifiedWord.indexOf(antipodalChar, 1)

    splitModifiedWord[i] = antipodalChar
    splitModifiedWord[antipodalIndex] = currentChar

    modifiedWord = splitModifiedWord.join('')
    if (modifiedWord === modifiedWord.split('').reverse().join('')) {
      return [Math.min(i, antipodalIndex), Math.max(i, antipodalIndex)]
    }

    modifiedWord = word
  }

  return null
}

console.log(
  getIndexsForPalindrome('anna'), // []
  '\n',
  getIndexsForPalindrome('abab'), // [0, 1]
  '\n',
  getIndexsForPalindrome('abac'), // null
  '\n',
  getIndexsForPalindrome('aaaaaaaa'), // []
  '\n',
  getIndexsForPalindrome('aaababa'), // [1, 3]
  '\n',
  getIndexsForPalindrome('caababa'), // null
  '\n',
  getIndexsForPalindrome('rotaratov') // [4, 8]
)
