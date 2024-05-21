const arr = [4,7,9,3,8,5,1,3,2];

//largest element

function largestElement(arr){
   let max=0;
   for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i];
    }
   }
   return max;
}

let res=largestElement(arr);
console.log("Max Element of array:",res);


function arraySum(arr){
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum += arr[i];
  }
  return sum;
}

console.log("Sum of all elements of array:",arraySum(arr));


function oddElements(arr){
  let cnt=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]&1) cnt++;
  }
  return cnt;
}

console.log("Number of Odd elements in array: ",oddElements(arr));