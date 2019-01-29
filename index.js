function produceDrivingRange(range){
  return function(start,end){
    if (parseInt(end)-parseInt(start) > range){
      return `${(parseInt(end)-parseInt(start))-range} blocks out of range`
  } else {
    return `within range by ${parseInt(end)-parseInt(start)}`
  }
  }
}

function produceTipCalculator(x){
  return function(y){
    return x*y
  }
}

function createDriver(){
  let DriverID = 0
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverID;
    }
  }
}
