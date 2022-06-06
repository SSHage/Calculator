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
    if (operator == 'addition'){
        return add(num1, num2);
    }
    else if (operator == 'subtraction'){
        return subtract(num1, num2);
    }
    else if (operator == 'multiplication'){
        return multiply(num1, num2);
    }
    else if (operator == 'division'){
        return divide(num1, num2);
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

let decimalCount = 0; // variable to count decimals inputted.
let num1, num2=0; // variables to insert into operator
let operator; // variable to store operator string
let finalNum = 0;

for (const button of buttons){
    button.addEventListener("click",function(e){
        this.classList.add("clicked"); // add animation for clicked button
            if (this.classList.contains("number")){
                if (this.classList.contains('decimal') && decimalCount == 0){
                    display.innerHTML += this.innerHTML; // append decimal to display if decimal button clicked
                    decimalCount++;
                    }
                else if (this.classList.contains('decimal') && decimalCount == 1){ // do not do anything if decimal clicked already
                    }
                else {
                    display.innerHTML += this.innerHTML; //append number to display
                    num1 = parseFloat(display.innerHTML); //store value of number
                    console.log("num1 is " + num1);
                    console.log("num2 is " + num2);
                }
                
                if (display.innerHTML.length > 8){ 
                    display.classList.add("shrink"); // shrink font if >9digits
                    }
                }
            else if (this.getAttribute('id') == "clear"){ // clear display if C is clicked
                display.innerHTML = "";
                display.classList.remove("shrink"); // shrink if that are >9digits
                num1 = 0; //reset values to 0
                num2 = 0;
                finalNum = 0;
            }

            else if (this.classList.contains("operator")){
                operator = this.id; // store operator as latest clicked operator button
                display.innerHTML = "";
                display.classList.remove("shrink"); // shrink if that are >9digits
            }

            if (num1 !=0 && num2 !=0) { // check if both numbers are not 0
                finalNum = operate(operator,num2,num1); 
                num2 = finalNum; 
                num1 = 0;
            }
            else if (num1 !=0 && num2 == 0) {
                num2 = num1; // if num1 already has a number, store num2 and reset num1 to 0
                num1 = 0;
                //console.log(this.innerHTML);
            }
            
            console.log("finalNum is " + finalNum);
        })
    button.addEventListener("transitionend",function(e){
        this.classList.remove("clicked"); // remove animation for clicked button
    })   
}

