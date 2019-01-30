function produceDrivingRange(blockRange) {
  return (block1, block2) => {
    let range = parseInt(block2) - parseInt(block1);
    if(range > blockRange) {
      return `${Math.abs(blockRange - range)} blocks out of range`;
    } else {
      return `within range by ${blockRange - range}`;
    }
  }
}

const produceTipCalculator = percentTip => fare => fare * percentTip;

const createDriver = () => {
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
