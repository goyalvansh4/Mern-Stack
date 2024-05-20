const Principal=192520.95;
const years=3;
const rateOfInterest=8;
const compoundInterest=Principal*Math.pow((1+rateOfInterest/100),years);
console.log(`The compound interest after ${years} is ${(compoundInterest-Principal).toFixed(2)}`);