function produceDrivingRange(rangeBlock) {
  return function(start, finish) {
    begin = parseInt(start)
    end = parseInt(finish)
    const distance = function (begin, end) { return Math.abs(begin - end) }
    if (distance(begin, end) > rangeBlock) {
      return `${distance(begin, end) - rangeBlock} blocks out of range`
    } else if  (distance(begin, end) < rangeBlock) {
      return `within range by ${rangeBlock - distance(begin, end)}`
    }
  }
}

function produceTipCalculator(percentPoint) {
  return function (fareTotal) {
    return fareTotal * percentPoint
  }
}

function createDriver() {
  let DriverId = 0;
  // return the class
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
