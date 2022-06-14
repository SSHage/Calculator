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

function clearDisplay(){
    display.innerHTML = "";
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
var num = []; // array to store number inputs
let i = 1; //incremental value for num array
var operator = []; // array to store operator string
let j = 1; //incremental value for operator array
let operatorClick = 0; //variable to limit operator clicks to 1
let finalNum = 0; // variable to show final number
let computed = 0; // variable to show if number has already been computed

for (const button of buttons){
    button.addEventListener("click",function(e){
        this.classList.add("clicked"); // add animation for clicked button
            if (this.classList.contains("number")){
                if (num[i]){ //if num[1] returns true, it has a value
                    i++;
                    clearDisplay();
                    if (finalNum !=0){
                        display.innerHTML = finalNum;
                    }
                }
                display.innerHTML += this.innerHTML; // append decimal to display if decimal button clicked
                }
 
            else if (this.classList.contains("decimal") && decimalCount == 0){
                display.innerHTML += this.innerHTML;
                decimalCount = 1; //maximum 1dp
            }
            else if (this.getAttribute('id') == "clear"){ // clear display if C is clicked
               clearDisplay();
               computed = 0;
               display.classList.remove("shrink"); // shrink if that are >9digits
               num = []; // reset array to empty
               finalNum = 0;
                }

            else if (this.classList.contains("operator")){

                operator[j] = this.id; // store operator as latest clicked operator button
                num[i] = parseFloat(display.innerHTML);
                i = 2; //increase to populate 2nd number

                if (computed == 0){
                    j++;
                    num[i] = parseFloat(display.innerHTML);
                    if (finalNum){
                        clearDisplay();
                        display.innerHTML += finalNum;
                    }

                    if (num[i] && num[i-1]){ //if both numbers at num[1] and num[2] are true, there are real values
                        finalNum=operate(operator[j-2],num[i-1],num[i]);
                        console.log("first number is " +num[i-1] + ". second number is " + num[i] + ". operator is " + operator[i-1]);
                        console.log(finalNum);
                        clearDisplay();
                        display.innerHTML += finalNum;
                        computed++;
                        } 
                    }

                }
                


            if (display.innerHTML.length > 8){ 
                display.classList.add("shrink"); // shrink font if >9digits
            }

        })
    button.addEventListener("transitionend",function(e){
        this.classList.remove("clicked"); // remove animation for clicked button
    })   
}

/* for (const button of buttons){
    button.addEventListener("click",function(e){
        this.classList.add("clicked"); // add animation for clicked button
            if (this.classList.contains("number")){
                if (this.classList.contains('decimal') && decimalCount == 0){
                    display.innerHTML += this.innerHTML; // append decimal to display if decimal butto
                    decimalCount++;
                    }
                else if (this.classList.contains('decimal') && decimalCount == 1){ // do not do anythi
                    }
                else if (operatorClick = 1){
                    console.log(operatorClick);
                    clearDisplay(); //clear display for next value
                    display.innerHTML += this.innerHTML; // append number to display
                    operatorClick = 0;
                }
                else {
                    display.innerHTML += this.innerHTML; //append number to display
                }
                
                if (display.innerHTML.length > 8){ 
                    display.classList.add("shrink"); // shrink font if >9digits
                    }
                }
            else if (this.getAttribute('id') == "clear"){ // clear display if C is clicked
                clearDisplay();
                display.classList.remove("shrink"); // shrink if that are >9digits
                num = []; // reset array to empty
                finalNum = 0;
            }

            else if (this.classList.contains("operator")){
                operator = this.id; // store operator as latest clicked operator button
                operatorClick++;
                if (finalNum != 0){
                    display.innerHTML += finalNum; 
                    i=1;
                    num[i] = finalNum;
                    operatorClick = 0;
                    i++;
                }

                if (operatorClick = 1){
                    num[i] = parseFloat(display.innerHTML);
                    console.log("number " + i + " is " + num[i]);
                    i++;
                    if (num.length =2){
                        finalNum = operate(operator,num[i-1],num[i]); 
                    }
                }

                display.classList.remove("shrink"); // shrink if that are >9digits 

            }
        })
    button.addEventListener("transitionend",function(e){
        this.classList.remove("clicked"); // remove animation for clicked button
    })   
} */