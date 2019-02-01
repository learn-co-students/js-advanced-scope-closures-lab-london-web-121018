const produceDrivingRange = function(blockRange) {
  return function(first, second) {
    let first_int = parseInt(first);
    let second_int = parseInt(second);
    let distance = second_int - first_int;
    let distanceAndBlockRange = blockRange - distance
    if (distanceAndBlockRange > 0) {
       positiveNumber = (distanceAndBlockRange * 1)
      return `within range by ${positiveNumber}`
    } else {
      let positiveNumber = (distanceAndBlockRange * - 1)
      return `${positiveNumber} blocks out of range`
    }
  }
}

const produceTipCalculator = function(percentage) {
  return function(fare) {
    return fare * percentage;
  }
}

const createDriver = function() {
  driverId = 0;
  return class {
     constructor(name) {
    this.id = driverId += 1;
    this.name = name
  }
}
}
