function getIndexsForPalindrome(word: string) {
  if(word === word.split('').reverse().join('')) return []

  let wordCopy = word

  for (let i = 0; i < wordCopy.length; i++) {

    const currentLetter = wordCopy[i]
    const antipodalLetter = wordCopy[wordCopy.length - 1 - i]

    console.log(currentLetter, antipodalLetter)

    if (currentLetter === antipodalLetter) continue

    const splitWordCopy = wordCopy.split('')
    const indiceLetra2 = splitWordCopy.indexOf(antipodalLetter, 1)

    console.log(currentLetter, i, antipodalLetter, indiceLetra2)

    splitWordCopy[i] = antipodalLetter
    splitWordCopy[indiceLetra2] = currentLetter

    wordCopy = splitWordCopy.join('')
    if(wordCopy === wordCopy.split('').reverse().join('')) {
      return [Math.min(i, indiceLetra2), Math.max(i, indiceLetra2)]
    }
    wordCopy = word
  }
  return null
}

const abc = getIndexsForPalindrome('rotaratov')
console.log(abc) // [4, 8]
