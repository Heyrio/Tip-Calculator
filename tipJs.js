var btn = document.querySelector("#sub");
var h1 = document.querySelector(".display");
var clear = document.querySelector("#clr");

// STEP 1 
btn.addEventListener("click", function(){
  console.log("connected");
      checkRadio(); 
});

// STEP 2
function checkRadio(){
 
  if(document.querySelector("#ten").checked){
    logic(0.10);
  }else if(document.querySelector("#fifteen").checked){
    logic(0.15);
  }else if(document.querySelector("#twenty").checked){
    logic(0.20);
  }else if(document.querySelector("#twentyFive").checked){
    logic(0.25);
  }else{
    console.log("There was an error!");
  }

}

// STEP 3
function logic(percent){
  console.log(percent);
  var bill = document.querySelector("#userInput").value;
  var answer = percent * bill;
  print(answer);
}

 // STEP 4
  function print(tipAmount){
    var h1 = document.querySelector(".display");
    h1.innerText ="Tip: " + tipAmount;
    
  }

  clr.addEventListener("click", function(){
    h1.innerText ="Tip: ";
    document.querySelector("#userInput").value = "";

  });

