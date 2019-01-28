function produceDrivingRange (range) {
  return function (start, end) {
    start = start.split('th').join('')
    end = end.split('th').join('')

    if (end - start < range) {
      return `within range by ${range - (end - start)}`
    } else {
      return `${end - start - range} blocks out of range`
    }
  }
}

function produceTipCalculator (percent) {
  return function (fare) {
    return fare * percent
  }
}

function createDriver () {
  let driverID = 0
  return class Driver {
    constructor (name) {
      this.name = name
      this.id = driverID++
    }
  }
}
