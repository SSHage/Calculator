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

//
var display=document.querySelector("display");

//function to record buttons clicked
const buttons = document.querySelectorAll("button");

for (const button of buttons){
    button.addEventListener("click",function(e){
        this.classList.add("clicked");
            if (this.classList.contains("number")){
                display.innerHTML += button.innerHTML;
                console.log(display.innerHTML);
                if (display.innerHTML.length > 9){
                    display.classList.add("shrink");
                    }
                }
        })
    button.addEventListener("transitionend",function(e){
        this.classList.remove("clicked");
    })   
}

