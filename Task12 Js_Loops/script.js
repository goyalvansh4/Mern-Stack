//const num = 153;

function calculateSum(num){
    let temp = num;
    let sum=0;
    while(temp){
      sum += temp % 10;
      temp = Math.floor(temp/10);
    }
    console.log(`The sum of digits of ${num} is ${sum}`);
}

calculateSum(153);
calculateSum(1234);
calculateSum(12345);
calculateSum(342);

function isArmstrong(num){
  let temp = num;
  let sum=0;
  while(temp){
    sum += Math.pow(temp % 10,3);
    temp = Math.floor(temp/10);
  }
  return sum === num;
}
if(isArmstrong(num=153)){
  console.log(`${num} is an Armstrong number`);
}
else{
  console.log(`${num} is not an Armstrong number`);
}
if(isArmstrong(num=535)){
    console.log(`${num} is an Armstrong number`);
  }
  else{
    console.log(`${num} is not an Armstrong number`);
  }


function isPrime(num){
  if(num === 1){
    return false;
  }
  for(let i=2;i<=Math.sqrt(num);i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}

if(isPrime(num=342)){
    console.log(`${num} is a prime number`) 
}
else{
    console.log(`${num} is not a prime number`);
}

if(isPrime(num=455)){
    console.log(`${num} is a prime number`) 
}
else{
    console.log(`${num} is not a prime number`);
}

function calculateFactor(num){
    console.log(`The factors of ${num} are:`);
    for(let i=1;i<=num;i++){
        if(num % i === 0){
         console.log(i);
        }
    }
}

calculateFactor(153);
calculateFactor(342);
calculateFactor(455);
    