

/*
// Points earned: 120
function decode(message: string) {

  const regex = /\((\w+)\)/
  const match = message.match(regex)

  if(match) {
    const newMessage = message.replace(match[0], match[1].split('').reverse().join(''))
    return decode(newMessage)
  }

  return message.replace(/[()]/g, '')
}
*/


function decode(message: string) {

  const regex = /\(([^()]+)\)/
  let match = message.match(regex)
  let newMessage = message

  while (match) {
    const invertedWord = match[1].split('').reverse().join('')
    newMessage = newMessage.replace(match[0], invertedWord)
    match = newMessage.match(regex)
  }

  return newMessage.replace(/[()]/g, '')
}



const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

const d = decode('((nta)(sa))')
console.log(d) // santa

const e = decode('(a@b)(c#d)')
console.log(e)
