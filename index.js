function produceDrivingRange(limit) {
    return function inRange(initRange, endRange) {
         let dist = Math.abs((parseInt(initRange) - parseInt(endRange)));

         if (dist < limit) {
            return `within range by ${Math.abs(limit - dist)}`
        } else {
            return `${Math.abs(limit - dist)} blocks out of range`
        };
    };
}; 

function produceTipCalculator(decimal) {
    return function tipCalculator(totalBill) {
        return totalBill * decimal;
    };
};

function createDriver(name) {
    let DriverId = 0;

    return class {
        constructor(name){
            this.name = name;
            this.id = ++DriverId;
        };
    } ;
};