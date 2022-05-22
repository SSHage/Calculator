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