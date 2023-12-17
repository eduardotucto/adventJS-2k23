
function calculateTime(deliveries: string[]) {
  const ld = new Date('1970-01-01T07:00:00')
  const id = new Date('1970-01-01T00:00:00')

  deliveries.forEach(deliverTime => {
    const [hour, min, sec] = deliverTime.split(':').map(Number)
    id.setHours(
      id.getHours() + hour,
      id.getMinutes() + min,
      id.getSeconds() + sec
    )
  })
  const ldMilisecs = ld.getTime()
  const idMilisecs = id.getTime()
  let resultTime = new Date(ldMilisecs - idMilisecs)
  let sign = '-'
  if(ldMilisecs - idMilisecs <= 0) {
    sign = ''
    resultTime = new Date(idMilisecs- ldMilisecs)
  }
  const h = ('0' + resultTime.getUTCHours()).slice(-2)
  const m = ('0' + resultTime.getMinutes()).slice(-2)
  const s = ('0' + resultTime.getSeconds()).slice(-2)
  return sign + [h, m ,s].join(':')
}

/*
// does not pass the tests
function calculateTime(deliveries: string[]) {
  let seconds: any = 0, minutes: any = 0, hours: any = -7

  deliveries.forEach(deliverTime => {
    const [hour, min, sec] = deliverTime.split(':').map(Number)

    if (seconds - sec < 0) {
      seconds = seconds + 60 - sec
      minutes === 0 ? '' : minutes -= 1
    } else seconds -= sec

    if (minutes - min < 0) {
      minutes = minutes + 60 - min
      hours === 0 ? '' : hours += 1
    } else minutes -= min

    hours += hour
  })

  seconds = seconds.toString().padStart(2, '0')
  minutes = minutes.toString().padStart(2, '0')
  hours < 0 ?
    hours = '-' + ('0' + Math.abs(hours)).slice(0, 2) :
    hours = hours.toString().padStart(2, '0')
  return [hours, minutes, seconds].join(':')
}
*/

/*
function calculateTime(deliveries: string[]) {
  let hours = 0, minutes = 0, seconds = 0

  deliveries.forEach(deliverTime => {
    const [hour, min, sec] = deliverTime.split(':').map(Number)
    hours += hour
    minutes += min
    seconds += sec

    if (seconds >= 60) {
      seconds -= 60
      minutes ++
    }
    if (minutes >= 60) {
      minutes -= 60
      hours ++
    }
  })

  // console.log(hours, minutes, seconds)

  let finalH = 0, finalM = 0, finalS = 0

  let minsToSustract = 60
  let hoursToSustract = 0
  let sign = ''

  if (hours - 7 > 0) {
    finalH = hours - 7
    finalM = minutes
    finalS = seconds
  } else {
    if (60 - seconds < 60) {
      finalS = 60 - seconds
      minsToSustract = 59
    }

    if (minsToSustract - minutes < minsToSustract) {
      finalM = minsToSustract - minutes
      hoursToSustract = 1
    }

    if (7 - hours - hoursToSustract >= 0) {
      finalH = 7 - hours - hoursToSustract
      sign = finalM + finalS === 0 ? '' : '-'
    }
  }

  return sign + ('0' + finalH).slice(-2) + ':' + ('0' + finalM).slice(-2) + ':' + ('0' + finalS).slice(-2)
}
*/

console.log(
  calculateTime(['00:10:00', '01:00:00', '03:30:00']), '\n',
  // '-02:20:00'
  calculateTime(['02:00:00', '05:00:00', '00:30:00']), '\n',
  // '00:30:00'
  calculateTime(['00:45:00','00:45:00','00:00:30','00:00:30']), '\n',
  // '-05:29:00'
  calculateTime(['01:00:00', '05:00:00', '00:30:00']), '\n',
  // '-00:30:00'
  calculateTime(['02:00:00', '03:00:00', '02:00:00']), '\n',
  // '00:00:00'
  calculateTime(['01:01:01', '09:59:59', '01:01:01']), '\n',
  // '05:02:01'
)