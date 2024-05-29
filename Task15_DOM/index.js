const boxes = document.querySelectorAll(".boxes");
const fullName = document.getElementById("fullName");
const btn = document.getElementById("btn");
const greet = document.getElementById("greet");



boxes.forEach((element,index) => {
  console.log(element);
  if(index === 0){
    element.addEventListener("click",()=>{
      element.style.backgroundColor = "red";
    });
  }
  else if(index === 1){
    element.addEventListener("click",()=>{
      element.style.backgroundColor = "blue";
    });
  }
  else if(index === 2){
    element.addEventListener("click",()=>{
      element.style.backgroundColor = "green";
    });
  }
  else if(index === 3){
    element.addEventListener("click",()=>{
      element.style.backgroundColor = "yellow";
    });
  }
  element.addEventListener("dblclick",()=>{
    element.style.backgroundColor = "white";
  })
});
function modifyHead(){
  if(fullName.value){
    let newHeader = greet.innerText + ", " + fullName.value;
    fullName.value = "";
    greet.innerText = newHeader;
  }
}

btn.addEventListener("click",modifyHead)
