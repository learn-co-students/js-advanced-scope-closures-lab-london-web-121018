function produceDrivingRange(maxDistance) {
  return function (startBlock, endBlock) {
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let distance = Math.abs(end - start);

    if (maxDistance - distance >= 0) {
      return `within range by ${maxDistance - distance}`
    } else {
      return `${distance - maxDistance} blocks out of range`
    };
  };
};

function produceTipCalculator(percentage) {
  return function (baseFare) {
    return percentage * baseFare;
  };
};

function createDriver() {
  let driverID = 0;
  return class {
    constructor(name) {
      this.id = ++driverID;
      this.name = name;
    };
  };
};
