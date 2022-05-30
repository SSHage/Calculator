function add() {
    let finalValue = 0;
    for (let i=0; i< arguments.length; i++){
        finalValue+=arguments[i];
    }
    return finalValue;
}

function subtract() {
    let finalValue = arguments[0];
    for (let i=1; i < arguments.length; i++){
        finalValue-=arguments[i];
    }
    return finalValue;
}

function multiply() {
    let finalValue = 1;
    for (let i=0; i < arguments.length; i++){
        finalValue*=arguments[i];
    }
    return finalValue;
}

function divide() {
    let finalValue = arguments[0];
    for (let i=1; i < arguments.length; i++){
        finalValue/=arguments[i];
    }
    return finalValue;
}

function operate(operator, num1, num2){
    if (operator == '+'){
        add(num1, num2);
    }
    else if (operator == '-'){
        subtract(num1,num2);
    }
    else if (operator == '×'){
        multiply(num1,num2);
    }
    else if (operator == '÷'){
        divide(num1,num2);
    }
}

// function to add operators
var equals=document.querySelector("#equals");
equals.innerHTML="=";

var addition=document.querySelector("#addition");
addition.innerHTML="+";

var subtraction=document.querySelector("#subtraction");
subtraction.innerHTML="-";

var multiplication=document.querySelector("#multiplication");
multiplication.innerHTML="×";

var division=document.querySelector("#division");
division.innerHTML="÷";

var division=document.querySelector("#percentage");
division.innerHTML="%";

var division=document.querySelector("#clear");
division.innerHTML="C";

//function to record buttons clicked
var display = document.querySelector("display");
const buttons = document.querySelectorAll("button");

let decimalCount = 0; //variable to count decimals inputted.

for (const button of buttons){
    button.addEventListener("click",function(e){
        this.classList.add("clicked");
            if (this.classList.contains("number")){
                if (this.classList.contains('decimal') && decimalCount == 0){
                    display.innerHTML += this.innerHTML; // append to display if number button clicked
                    decimalCount++;
                    console.log(decimalCount);
                    }
                else if (this.classList.contains('decimal') && decimalCount == 1){
                    }
                else {
                    display.innerHTML += this.innerHTML;
                }
                
                if (display.innerHTML.length > 8){ 
                    display.classList.add("shrink"); // shrink font if >9digits
                    }
                }
            // clear display if C is pressed
            else if (this.getAttribute('id') == "clear"){
                console.log(this.innerHTML);
                display.innerHTML = "";
                display.classList.remove("shrink");
            }

            
        })
    button.addEventListener("transitionend",function(e){
        this.classList.remove("clicked");
    })   
}

