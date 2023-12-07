

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

/*
// Points earned: 270
function decode(message: string) {
  const vault = []
  let msg_decoded = ''

  for (const letter of message) {
    if (letter === '(') {
      vault.push(msg_decoded)
      msg_decoded = ''
    } else if (letter === ')') {
      const invertedWord = msg_decoded.split('').reverse().join('')
      msg_decoded = vault.pop() + invertedWord
    } else {
      msg_decoded += letter
    }
  }

  return msg_decoded
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

  return newMessage
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
