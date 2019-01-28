function produceDrivingRange(range_arg) {
  return function func(arg1, arg2) {
      let difference  = arg2.slice(0,2) - arg1.slice(0,2);
      if (difference > range_arg) {
        let out = difference - range_arg;
        return `${out} blocks out of range`;
      } else {
        let out = range_arg - difference;
        return `within range by ${out}`; 
      }
} 

}

function produceTipCalculator(multiplier) {
  return  function tipAmount (amount) {
     return amount * multiplier;
  }
}

function createDriver() {
  let did = 0;
  return class Driver {
  constructor(name){
    this.name = name;
    this.id = ++did;
  }
 
}
  
}



