function checkEvenOrOdd(num){
    if(num % 2 == 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log("5 is ",checkEvenOrOdd(5));
console.log("10 is ",checkEvenOrOdd(10));
console.log("3 is ",checkEvenOrOdd(3));
console.log("8 is ",checkEvenOrOdd(8));
console.log("2 is ",checkEvenOrOdd(2));